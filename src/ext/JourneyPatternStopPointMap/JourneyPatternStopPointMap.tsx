import './styles.scss';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { memo, useCallback, useMemo, useState } from 'react';
import StopPlaceMarker from './StopPlaceMarker';
import {
  JourneyPatternStopPointMapProps,
  FocusedMarker,
  FocusedMarkerNewMapState,
  JourneyPatternsStopPlacesState,
} from './types';
import { Polyline, ZoomControl } from 'react-leaflet';
import { Centroid, StopPlace } from '../../api';
import QuaysWrapper from './Quay/QuaysWrapper';
import SearchPopover from './Popovers/SearchPopover';
import {
  getSelectedQuayIds,
  getStopPlacesState,
  onFocusedMarkerNewMapState,
} from './helpers';
import { useMapState, useStopPlacesData } from './hooks';

const defaultStopPlaces: StopPlace[] = [];

const JourneyPatternStopPointMap = memo(
  ({
    pointsInSequence,
    addStopPoint,
    deleteStopPoint,
    transportMode,
  }: JourneyPatternStopPointMapProps) => {
    // Fetching stop places data and the indexes:
    const { stopPlacesState } = useStopPlacesData(transportMode);
    const stopPlaces = stopPlacesState?.stopPlaces || defaultStopPlaces;

    // Search results stop places and its respective indexes:
    const [searchedStopPlacesState, setSearchedStopPlacesState] =
      useState<JourneyPatternsStopPlacesState>(getStopPlacesState(undefined));

    // Combining the whole stop places set and the search results:
    const totalStopPlaces = useMemo(() => {
      const total = [...stopPlaces];
      searchedStopPlacesState.stopPlaces?.forEach((stopPlace) => {
        if (stopPlaces.filter((s) => s.id === stopPlace.id).length === 0) {
          total.push(stopPlace);
        }
      });
      return total;
    }, [stopPlaces, searchedStopPlacesState.stopPlaces]);
    const totalQuayLocationsIndex: Record<string, Centroid> = useMemo(() => {
      return {
        ...stopPlacesState?.quayLocationsIndex,
        ...searchedStopPlacesState.quayLocationsIndex,
      };
    }, [
      stopPlacesState?.quayLocationsIndex,
      searchedStopPlacesState.quayLocationsIndex,
    ]);
    const totalQuayStopPlaceIndex: Record<string, string> = useMemo(() => {
      return {
        ...stopPlacesState?.quayStopPlaceIndex,
        ...searchedStopPlacesState.quayStopPlaceIndex,
      };
    }, [
      stopPlacesState?.quayStopPlaceIndex,
      searchedStopPlacesState.quayStopPlaceIndex,
    ]);

    // This hook manages what's shown on the map and how exactly:
    const { mapState, setMapState, mapStateRef } = useMapState(
      pointsInSequence,
      totalQuayLocationsIndex,
      totalQuayStopPlaceIndex,
    );

    const updateSearchedStopPlacesCallback = useCallback(
      (newSearchedStopPlacesState: JourneyPatternsStopPlacesState) => {
        setSearchedStopPlacesState(newSearchedStopPlacesState);
      },
      [],
    );

    const focusMarkerCallback = useCallback(
      (focusedMarker: FocusedMarker | undefined) => {
        if (!focusedMarker) {
          setMapState({ focusedMarker: undefined });
          return;
        }

        const changedMapState: FocusedMarkerNewMapState =
          onFocusedMarkerNewMapState(
            focusedMarker,
            mapState.showQuaysState,
            mapState.hideNonSelectedQuaysState,
            mapState.quayStopPointSequenceIndexes,
          );

        if (changedMapState.hideNonSelectedQuaysState) {
          // mapStateRef needs to be kept up-to-date to fulfil its purpose in the useMap hook
          mapStateRef.current['hideNonSelectedQuaysState'] =
            changedMapState.hideNonSelectedQuaysState;
        }

        setMapState({
          ...mapState,
          ...changedMapState,
        });
      },
      [setMapState, mapState, mapStateRef.current],
    );

    const clearFocusedMarker = useCallback(() => {
      focusMarkerCallback(undefined);
    }, []);

    const getSelectedQuayIdsCallback = useCallback(
      (stopPlace: StopPlace) => {
        return getSelectedQuayIds(
          stopPlace,
          mapStateRef.current.quayStopPointSequenceIndexes,
        );
      },
      [
        /*mapState.quayStopPointSequenceIndexes*/ mapStateRef.current,
        getSelectedQuayIds,
      ],
    );

    /**
     * Note that method and deps don't rely on mapState.showQuaysState;
     * Reason for that is, when state changes, so does the showQuaysCallback and
     * that can result in the many thousands of stop places markers being re-rendered -
     * - and that we must avoid
     */
    const showQuaysCallback = useCallback(
      (showAll: boolean, stopPlaceId: string) => {
        const newShowQuaysState = {
          ...mapStateRef.current.showQuaysState,
        };

        newShowQuaysState[stopPlaceId] = showAll;
        mapStateRef.current.showQuaysState = newShowQuaysState;
        setMapState({
          showQuaysState: newShowQuaysState,
          //hideNonSelectedQuaysState: newHideNonSelectedQuaysState,
        });
      },
      [mapStateRef.current],
    );

    const hideNonSelectedQuaysCallback = useCallback(
      (hideNonSelected: boolean, stopPlaceId: string) => {
        const newHideNonSelectedQuaysState = {
          ...mapStateRef.current.hideNonSelectedQuaysState,
        };
        newHideNonSelectedQuaysState[stopPlaceId] = hideNonSelected;
        // mapStateRef needs to be kept up-to-date to fulfil its purpose in the useMap hook
        mapStateRef.current['hideNonSelectedQuaysState'] =
          newHideNonSelectedQuaysState;
        setMapState({
          hideNonSelectedQuaysState: newHideNonSelectedQuaysState,
        });
      },
      [mapStateRef.current],
    );

    const markers = useMemo(() => {
      return totalStopPlaces.map((stopPlace: StopPlace) => {
        return mapState.showQuaysState[stopPlace.id] ? (
          <QuaysWrapper
            key={'quays-wrapper-for-' + stopPlace.id}
            stopPlace={stopPlace}
            stopPointSequenceIndexes={mapState.quayStopPointSequenceIndexes}
            hideNonSelectedQuaysState={
              mapState.hideNonSelectedQuaysState[stopPlace.id]
            }
            deleteStopPoint={deleteStopPoint}
            addStopPoint={addStopPoint}
            hideNonSelectedQuaysCallback={hideNonSelectedQuaysCallback}
            showQuaysCallback={showQuaysCallback}
            focusedMarker={mapState.focusedMarker}
            clearFocusedMarker={clearFocusedMarker}
          />
        ) : (
          <StopPlaceMarker
            key={'stop-place-marker-' + stopPlace.id}
            stopPlace={stopPlace}
            showQuaysCallback={showQuaysCallback}
            addStopPointCallback={addStopPoint}
            isPopupToBeOpen={
              stopPlace.id === mapState.focusedMarker?.stopPlace.id
            }
            clearFocusedMarker={clearFocusedMarker}
          />
        );
      });
    }, [
      mapState.showQuaysState,
      mapState.focusedMarker,
      mapState.hideNonSelectedQuaysState,
      mapState.quayStopPointSequenceIndexes,
    ]);

    return (
      <>
        <SearchPopover
          searchedStopPlaces={searchedStopPlacesState.stopPlaces}
          transportMode={transportMode}
          focusMarkerCallback={focusMarkerCallback}
          getSelectedQuayIdsCallback={getSelectedQuayIdsCallback}
          updateSearchedStopPlacesCallback={updateSearchedStopPlacesCallback}
        />
        <ZoomControl position={'topright'} />
        <MarkerClusterGroup
          chunkedLoading
          disableClusteringAtZoom={12}
          removeOutsideVisibleBounds={true}
        >
          <Polyline positions={mapState.stopPointLocationSequence} />
          {markers}
        </MarkerClusterGroup>
      </>
    );
  },
);

export default JourneyPatternStopPointMap;
