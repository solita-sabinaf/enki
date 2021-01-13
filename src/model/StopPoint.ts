import FlexibleStopPlace from './FlexibleStopPlace';
import BookingArrangement from './BookingArrangement';
import Notice from './Notice';
import VersionedType from 'model/VersionedType';

type DestinationDisplay = {
  frontText?: string;
};

type StopPoint = VersionedType & {
  flexibleStopPlace?: FlexibleStopPlace;
  flexibleStopPlaceRef?: string; // Either flexibleStopPlace or flexibleStopPlaceRef seems useless
  quayRef?: string;
  bookingArrangement?: BookingArrangement;
  destinationDisplay?: DestinationDisplay;
  forBoarding?: boolean;
  forAlighting?: boolean;
  notices?: Notice[];
};

export const stopPointToPayload = (stopPoint: StopPoint) => {
  const { flexibleStopPlace, ...rest } = stopPoint;
  const payload = rest as any;

  if (payload.bookingArrangement === undefined) {
    payload.bookingArrangement = null;
  }

  return payload;
};

export default StopPoint;
