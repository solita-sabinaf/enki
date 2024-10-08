import { Tooltip } from 'react-leaflet';
import React, { MutableRefObject } from 'react';

interface QuayIndexTooltipProps {
  markerRef: MutableRefObject<any>;
  stopPointSequenceIndexes: number[];
  quayId: string;
}

const QuaySequenceIndexTooltip = ({
  markerRef,
  stopPointSequenceIndexes,
  quayId,
}: QuayIndexTooltipProps) => {
  return (
    <div
      // This wrapper is important as Tooltip itself doesn't accept onClick,
      // and directly applying flex screws up tooltip's look
      style={{
        display: 'flex',
      }}
      onClick={() => {
        markerRef.current.openPopup();
      }}
    >
      <Tooltip
        interactive={true}
        direction="right"
        offset={[10, -17]}
        opacity={1}
        permanent
      >
        {stopPointSequenceIndexes.map((index, i) => {
          const isLast = i == stopPointSequenceIndexes.length - 1;
          return (
            <span
              key={'stop-point-sequence-index-tooltip-' + quayId + '-' + index}
              className={
                !isLast ? 'stop-point-sequence-index-tooltip-item' : ''
              }
            >
              {index + 1}
            </span>
          );
        })}
      </Tooltip>
    </div>
  );
};

export default QuaySequenceIndexTooltip;
