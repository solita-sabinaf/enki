import { gql } from '@apollo/client';

export const getUserContextQuery = `
  query GetUserContext {
    userContext {
      preferredName,
      isAdmin,
      providers {
        name,
        code
       }
    }
  }
`;

export const getProvidersQuery = `
  query GetProviders {
    providers {
      name,
      code,
      codespace {
        xmlns,
        xmlnsUrl
      }
    }
  }
`;

export const getNetworksQuery = `
  query GetNetworks {
    networks {
      id,
      name,
      description,
      privateCode,
      authorityRef
    }
  }
`;

export const getNetworkByIdQuery = `
  query GetNetworkById($id:ID!) {
    network(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      description,
      privateCode,
      authorityRef
    }
  }
`;

export const getBrandingsQuery = `
  query GetBrandings {
    brandings {
      id,
      name,
      shortName,
      description,
      url,
      imageUrl
    }
  }
`;

export const getBrandingByIdQuery = `
  query GetBrandingById($id:ID!) {
    branding(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      shortName,
      description,
      url,
      imageUrl
    }
  }
`;

export const getFlexibleLinesQuery = `
query getFlexibleLines {
  flexibleLines {
    id,
    name,
    description,
    privateCode,
    publicCode,
    flexibleLineType,
    operatorRef,
    network {
      id
    },
    branding {
      id
      },
    journeyPatterns {
      pointsInSequence {
        flexibleStopPlace {
          id
        }
      }
    }
  }
}
`;

export const getFlexibleLineByIdQuery = `
  query GetFlexibleLineById($id:ID!) {
    flexibleLine(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      description,
      privateCode,
      publicCode,
      transportMode,
      transportSubmode,
      operatorRef,
      flexibleLineType,
      notices { text }
      bookingArrangement { ...bookingArrangementFields },
      network {
        id
      },
      branding {
        id
      },
      journeyPatterns {
        id,
        name,
        description,
        privateCode,
        pointsInSequence {
          id,
          flexibleStopPlace {
            id
            name
          },
          quayRef,
          bookingArrangement { ...bookingArrangementFields },
          destinationDisplay {
            frontText
          },
          forBoarding,
          forAlighting
        },
        serviceJourneys {
          id,
          name,
          description,
          privateCode,
          publicCode,
          operatorRef,
          notices { text }
          bookingArrangement { ...bookingArrangementFields },
          passingTimes {
            id,
            arrivalTime,
            arrivalDayOffset,
            departureTime,
            departureDayOffset,
            latestArrivalTime,
            latestArrivalDayOffset,
            earliestDepartureTime,
            earliestDepartureDayOffset
          },
          dayTypes {
            id,
            name,
            daysOfWeek,
            dayTypeAssignments {
              isAvailable,
              date,
              operatingPeriod {
                fromDate,
                toDate
              }
            }
          }
        }
      }
    }
  }

  fragment bookingArrangementFields on BookingArrangement {
    bookingContact {
      contactPerson,
      phone,
      email,
      url,
      furtherDetails
    },
    bookingNote,
    bookingMethods,
    bookingAccess,
    bookWhen,
    buyWhen,
    latestBookingTime,
    minimumBookingPeriod
  }
`;

export const getlineByIdQuery = `
  query GetlineById($id:ID!) {
    line(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      description,
      privateCode,
      publicCode,
      transportMode,
      transportSubmode,
      operatorRef,
      notices { text }
      network {
        id
      },
      branding {
      id
      },
      journeyPatterns {
        id,
        name,
        description,
        privateCode,
        pointsInSequence {
          id,
          flexibleStopPlace {
            id
          },
          quayRef,
          destinationDisplay {
            frontText
          },
          forBoarding,
          forAlighting
        },
        serviceJourneys {
          id,
          name,
          description,
          privateCode,
          publicCode,
          operatorRef,
          notices { text }
          passingTimes {
            id,
            arrivalTime,
            arrivalDayOffset,
            departureTime,
            departureDayOffset,
            latestArrivalTime,
            latestArrivalDayOffset,
            earliestDepartureTime,
            earliestDepartureDayOffset
          },
          dayTypes {
            id,
            name,
            daysOfWeek,
            dayTypeAssignments {
              isAvailable,
              date,
              operatingPeriod {
                fromDate,
                toDate
              }
            }
          }
        }
      }
    }
  }
`;

export const getFlexibleStopPlacesQuery = `
  query GetFlexibleStopPlaces {
    flexibleStopPlaces {
      id,
      name,
      description,
      privateCode,
      keyValues {
        key
        values
      }
      flexibleAreas {
        keyValues {
          key
          values
        }
        polygon {
          coordinates
        }
      }
    }
  }
`;

export const getFlexibleStopPlaceByIdQuery = `
  query GetFlexibleStopPlaceById($id:ID!) {
    flexibleStopPlace(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      description,
      privateCode,
      transportMode,
      keyValues {
        key
        values
      }
      flexibleAreas {
        keyValues {
          key
          values
        }
        polygon {
          type,
          coordinates
        }
      }
    }
  }
`;

export const getExportsQuery = `
  query GetExports($historicDays:Long) {
    exports(historicDays: $historicDays) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      exportStatus,
      dryRun,
      downloadUrl
    }
  }
`;

export const getExportByIdQuery = `
  query GetExportById($id:ID!) {
    export(id: $id) {
      id,
      version,
      created,
      createdBy,
      changed,
      changedBy,
      name,
      exportStatus,
      dryRun,
      generateServiceLinks,
      downloadUrl,
      messages {
        severity,
        message
      }
    }
  }
`;

export const GET_LINES = gql`
  query GetLines {
    lines {
      id
      name
      privateCode
      publicCode
      operatorRef
    }
  }
`;

const LineEditorPage = {
  fragments: {
    line: gql`
      fragment LineEditorPageLine on Line {
        id
        version
        created
        createdBy
        changed
        changedBy
        name
        description
        privateCode
        publicCode
        transportMode
        transportSubmode
        operatorRef
        notices {
          text
        }
        network {
          id
          authorityRef
        }
        branding {
          id
        }
        journeyPatterns {
          id
          name
          description
          privateCode
          pointsInSequence {
            id
            flexibleStopPlace {
              id
            }
            quayRef
            destinationDisplay {
              frontText
            }
            forBoarding
            forAlighting
          }
          serviceJourneys {
            id
            name
            description
            privateCode
            publicCode
            operatorRef
            notices {
              text
            }
            passingTimes {
              id
              arrivalTime
              arrivalDayOffset
              departureTime
              departureDayOffset
              latestArrivalTime
              latestArrivalDayOffset
              earliestDepartureTime
              earliestDepartureDayOffset
            }
            dayTypes {
              id
              name
              daysOfWeek
              dayTypeAssignments {
                isAvailable
                date
                operatingPeriod {
                  fromDate
                  toDate
                }
              }
              name
            }
          }
        }
      }
    `,
    networks: gql`
      fragment LineEditorPageNetworks on Network {
        id
        name
        description
        privateCode
        authorityRef
      }
    `,
    brandings: gql`
      fragment LineEditorPageBrandings on Branding {
        id
        name
        shortName
        description
        url
        imageUrl
      }
    `,
  },
};

export const LINE_EDITOR_QUERY = gql`
  query LineEditorQuery($id: ID!, $includeLine: Boolean!) {
    line(id: $id) @include(if: $includeLine) {
      ...LineEditorPageLine
    }
    networks {
      ...LineEditorPageNetworks
    }
    brandings {
      ...LineEditorPageBrandings
    }
  }
  ${LineEditorPage.fragments.line}
  ${LineEditorPage.fragments.networks}
  ${LineEditorPage.fragments.brandings}
`;

const ExportPage = {
  fragments: {
    journeyPatterns: gql`
      fragment ExportPageJourneyPatterns on JourneyPattern {
        serviceJourneys {
          dayTypes {
            dayTypeAssignments {
              operatingPeriod {
                fromDate
                toDate
              }
            }
          }
        }
      }
    `,
  },
};

export const GET_LINES_FOR_EXPORT = gql`
  query GetLinesForExport {
    lines {
      id
      name
      journeyPatterns {
        ...ExportPageJourneyPatterns
      }
    }
    flexibleLines {
      id
      name
      journeyPatterns {
        ...ExportPageJourneyPatterns
      }
    }
  }
  ${ExportPage.fragments.journeyPatterns}
`;

export const GET_DAY_TYPES_BY_IDS = gql`
  query GetDayTypesByIds($ids: [ID!]!) {
    dayTypesByIds(ids: $ids) {
      changed
      id
      name
      numberOfServiceJourneys
      daysOfWeek
      dayTypeAssignments {
        isAvailable
        date
        operatingPeriod {
          fromDate
          toDate
        }
      }
      name
    }
  }
`;

export const GET_DAY_TYPES = gql`
  query GetDayTypes {
    dayTypes {
      changed
      id
      name
      numberOfServiceJourneys
      daysOfWeek
      dayTypeAssignments {
        isAvailable
        date
        operatingPeriod {
          fromDate
          toDate
        }
      }
    }
  }
`;

export const STOP_PLACE_BY_QUAY_REF_QUERY = gql`
  query StopPlaceByQuayRefQuery($id: ID!) {
    stopPlaceByQuayRef(id: $id) {
      id
      name {
        value
      }
      transportMode
      centroid {
        location {
          longitude
          latitude
        }
      }
      quays {
        id
        publicCode
        centroid {
          location {
            longitude
            latitude
          }
        }
      }
    }
  }
`;

export const getStopPlacesQuery = `
  query StopPlacesQuery($transportMode:TransportModeEnumeration, $searchText:String, $quayIds: [ID], $northEastLat:BigDecimal, $northEastLng:BigDecimal, $southWestLat:BigDecimal, $southWestLng:BigDecimal, $limit:Int) {
    stopPlaces(transportMode: $transportMode, searchText: $searchText, quayIds: $quayIds, northEastLat: $northEastLat, northEastLng: $northEastLng, southWestLat: $southWestLat, southWestLng: $southWestLng, limit: $limit) {
      id
      name {
        value
      }
      transportMode
      centroid {
          location {
            longitude
            latitude
          }
        }
      quays {
        id
        name {
          value
        }
        publicCode
        centroid {
          location {
            longitude
            latitude
          }
        }
      }
    }
  }
`;

export const getOrganisationsQuery = `
  query OrganisationsQuery {
    organisations {
      id
      name { value }
      type
    }
  }
`;

export const getServiceLinkQuery = `
  query ServiceLinkQuery($quayRefFrom:String, $quayRefTo:String, $mode:VehicleModeEnumeration) {
    serviceLink(quayRefFrom: $quayRefFrom, quayRefTo: $quayRefTo, mode: $mode) {
      quayRefFrom,
      quayRefTo,
      serviceLinkRef,
      routeGeometry {
         distance
         coordinates
      }
    }
  }
`;
