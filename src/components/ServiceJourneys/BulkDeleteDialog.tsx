import { ButtonGroup, PrimaryButton, SecondaryButton } from '@entur/button';
import { Checkbox, TextField } from '@entur/form';
import { SearchIcon } from '@entur/icons';
import { Modal } from '@entur/modal';
import {
  DataCell,
  HeaderCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@entur/table';
import { StrongText, SubParagraph } from '@entur/typography';
import ServiceJourney from 'model/ServiceJourney';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  open: boolean;
  dismiss: () => void;
  serviceJourneys: ServiceJourney[];
  journeyPatternIndex: number;
  onConfirm: (
    ids: string[],
    serviceJourneys: ServiceJourney[],
    journeyPatternIndex: number,
  ) => void;
};

export default (props: Props) => {
  const { open, dismiss, serviceJourneys, journeyPatternIndex, onConfirm } =
    props;

  const { formatMessage } = useIntl();

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [data, setData] = useState<ServiceJourney[]>(serviceJourneys);

  const [filterSearch, setFilterSearch] = React.useState('');

  useEffect(() => {
    const textSearchRegex = new RegExp(
      filterSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'i',
    );
    const filtered = serviceJourneys.filter(
      (item) => textSearchRegex.test(item.name!) || filterSearch === '',
    );
    setData(filtered);
    setSelectedIds((s) =>
      s.filter((id) => filtered.some((item) => item.id === id)),
    );
  }, [filterSearch, serviceJourneys]);

  const add = (id: string) => {
    setSelectedIds([...selectedIds, id]);
  };

  const remove = (id: string) => {
    setSelectedIds(selectedIds.filter((v) => v !== id));
  };

  return (
    <Modal
      open={open}
      size="extraLarge"
      title={formatMessage({ id: 'bulkDeleteDialogTitle' })}
      onDismiss={dismiss}
    >
      <TextField
        label={formatMessage({ id: 'bulkDeleteDialogFilterSearchLabel' })}
        style={{ width: '15rem' }}
        prepend={<SearchIcon inline />}
        value={filterSearch}
        placeholder=""
        onChange={(e: any) => setFilterSearch(e.target.value)}
      />
      <Table spacing="small" style={{ marginTop: '1rem' }}>
        <TableHead>
          <HeaderCell padding="checkbox">
            <Checkbox
              name="all"
              checked={
                selectedIds.length > 0 && selectedIds.length < data.length
                  ? 'indeterminate'
                  : selectedIds.length > 0
              }
              onChange={() =>
                selectedIds.length > 0
                  ? setSelectedIds([])
                  : setSelectedIds(data.map((sj) => sj.id!))
              }
            />
          </HeaderCell>
          <HeaderCell>
            {formatMessage({ id: 'bulkDeleteDialogNameHeader' })}
          </HeaderCell>
          <HeaderCell>
            {formatMessage({ id: 'bulkDeleteDialogDepartureHeader' })}
          </HeaderCell>
          <HeaderCell>
            {formatMessage({ id: 'bulkDeleteDialogDepartureDayOffsetHeader' })}
          </HeaderCell>
          <HeaderCell>
            {formatMessage({ id: 'bulkDeleteDialogValidityHeader' })}
          </HeaderCell>
        </TableHead>
        <TableBody>
          {data.map((sj, index) => (
            <TableRow key={index}>
              <DataCell>
                <Checkbox
                  name={sj.name}
                  checked={selectedIds.includes(sj.id!)}
                  onChange={() =>
                    selectedIds.includes(sj.id!) ? remove(sj.id!) : add(sj.id!)
                  }
                />
              </DataCell>
              <DataCell>{sj.name}</DataCell>
              <DataCell>{sj.passingTimes[0].departureTime}</DataCell>
              <DataCell>{sj.passingTimes[0].departureDayOffset}</DataCell>
              <DataCell>
                {sj.dayTypes?.map((dt) => (
                  <SubParagraph>
                    <StrongText>{dt.daysOfWeek.join(' ')}: </StrongText>
                    {dt.dayTypeAssignments.map((dta, index) => (
                      <span key={index}>
                        {dta.operatingPeriod.fromDate} - {' '}
                        {dta.operatingPeriod.toDate}
                      </span>
                    ))}
                  </SubParagraph>
                ))}
              </DataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ButtonGroup style={{ marginTop: '1rem' }}>
        <SecondaryButton onClick={() => dismiss()}>
          {formatMessage({ id: 'bulkDeleteDialogCancelButtonLabel' })}
        </SecondaryButton>
        <PrimaryButton
          disabled={selectedIds.length === 0}
          onClick={() =>
            onConfirm(selectedIds, serviceJourneys, journeyPatternIndex)
          }
        >
          {formatMessage({ id: 'bulkDeleteDialogConfirmButtonLabel' })}
        </PrimaryButton>
      </ButtonGroup>
    </Modal>
  );
};
