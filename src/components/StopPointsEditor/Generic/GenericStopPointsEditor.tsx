import { Heading3, Paragraph } from '@entur/typography';
import AddButton from 'components/AddButton/AddButton';
import StopPoint from 'model/StopPoint';
import { useIntl } from 'react-intl';
import { StopPointsEditorProps } from '..';
import { GenericStopPointEditor } from './GenericStopPointEditor';
import { useConfig } from '../../../config/ConfigContext';
import { SmallAlertBox } from '@entur/alert';
import '../styles.scss';
import { useCallback, useEffect, useState } from 'react';
import { ComponentToggle } from '@entur/react-component-toggle';

export const GenericStopPointsEditor = ({
  pointsInSequence,
  spoilPristine,
  updateStopPoint,
  deleteStopPoint,
  addStopPoint,
  flexibleLineType,
  transportMode,
  initDefaultJourneyPattern,
  swapStopPoints,
}: StopPointsEditorProps) => {
  const { formatMessage } = useIntl();
  const { sandboxFeatures } = useConfig();
  const isMapEnabled = sandboxFeatures?.JourneyPatternStopPointMap;
  const [focusedQuayId, setFocusedQuayId] = useState<string | undefined | null>(
    undefined,
  );

  useEffect(() => {
    // if map isn't enabled, let's produce two empty stop points
    if (!isMapEnabled && pointsInSequence?.length === 0) {
      initDefaultJourneyPattern();
    }
  }, []);

  const onFocusedQuayIdUpdate = useCallback(
    (quayId: string | undefined | null) => {
      setFocusedQuayId(quayId);
    },
    [],
  );

  return (
    <section style={{ marginTop: '2em' }}>
      <Heading3>{formatMessage({ id: 'editorStopPoints' })}</Heading3>
      {!isMapEnabled && (
        <Paragraph>{formatMessage({ id: 'stopPointsInfoFixed' })}</Paragraph>
      )}
      <div className={'stop-point-editor-container'}>
        <div
          className={`stop-point-editor ${isMapEnabled ? 'stop-point-editor-width-limit' : ''}`}
        >
          {isMapEnabled && pointsInSequence?.length < 2 && (
            <SmallAlertBox
              className={'stop-point-number-alert'}
              variant={'info'}
            >
              {formatMessage({ id: 'stopPointsMapInfo' })}
            </SmallAlertBox>
          )}
          {pointsInSequence.map((stopPoint, pointIndex) => (
            <GenericStopPointEditor
              key={stopPoint.key}
              order={pointIndex + 1}
              stopPoint={stopPoint}
              spoilPristine={spoilPristine}
              isFirst={pointIndex === 0}
              isLast={pointIndex === pointsInSequence.length - 1}
              onChange={(updatedStopPoint: StopPoint) =>
                updateStopPoint(pointIndex, updatedStopPoint)
              }
              onDelete={() => deleteStopPoint(pointIndex)}
              canDelete={pointsInSequence.length > 2}
              flexibleLineType={flexibleLineType}
              onFocusedQuayIdUpdate={onFocusedQuayIdUpdate}
              swapStopPoints={swapStopPoints}
            />
          ))}
        </div>
        <ComponentToggle
          feature={'JourneyPatternStopPointMap'}
          componentProps={{
            pointsInSequence,
            addStopPoint,
            deleteStopPoint,
            transportMode,
            focusedQuayId,
            onFocusedQuayIdUpdate,
          }}
        />
      </div>
      <AddButton
        onClick={() => addStopPoint()}
        buttonTitle={formatMessage({ id: 'editorAddStopPoint' })}
      />
    </section>
  );
};
