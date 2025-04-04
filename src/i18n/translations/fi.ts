import { MessagesKey } from '../translationKeys';

export const messages = {
  appLoadingMessage: 'Ladataan tarjoajia ja organisaatioita...',
  exportsLoadExportByIdErrorHeader: 'Lataa vienti',
  exportsLoadExportByIdErrorMessage:
    'Virhe tapahtui ladattaessa vientiä: {details}',
  exportsLoadExportsErrorHeader: 'Lataa vientit',
  exportsLoadExportsErrorMessage:
    'Virhe tapahtui vientien lataamisessa: {details}',
  exportsSaveExportErrorHeader: 'Tallenna vienti',
  exportsSaveExportErrorMessage:
    'Virhe tapahtui vientin tallentamisessa: {details}',
  exportsSaveExportSuccessHeader: 'Tallennetaan vienti',
  exportsSaveExportSuccessMessage: 'Vienti tallennettiin.',
  deleteLineErrorHeader: 'Poista rivi',
  deleteLineErrorMessage: 'Virhe tapahtui rivin poistamisessa: {details}',
  deleteLineSuccessHeader: 'Poista rivi',
  deleteLineSuccessMessage: 'Rivi poistettiin',
  loadLineByIdErrorHeader: 'Lataa rivi',
  loadLineByIdErrorMessage: 'Virhe tapahtui linjan lataamisessa: {details}',
  loadLinesErrorHeader: 'Lataa linjat',
  loadLinesErrorMessage: 'Virhe tapahtui linjojen lataamisessa: {details}',
  saveLineErrorHeader: 'Tallenna linja',
  saveLineErrorMessage: 'Virhe tapahtui linjan tallentamisessa: {details}',
  saveLineSuccessHeader: 'Tallenna rivi',
  saveLineSuccessMessage: 'Linja tallennettiin onnistuneesti!',
  modalSaveLineSuccessHeader: 'Linja luotiin onnistuneesti!',
  modalSaveLineSuccessMessage:
    'Luotiin ja tallennettiin onnistuneesti. Voit tarkastella tai tehdä muutoksia siihen joustavien linjojen yleiskatselussa. Muista tehdä vienti, johon sisältyy linja, jotta se näkyy matkahauissa.',
  flexibleLinesSaveLineSuccessButton: 'Ok',
  flexibleStopPlacesDeleteStopPlaceErrorHeader: 'Poista pysäkkipiste',
  flexibleStopPlacesDeleteStopPlaceErrorMessage:
    'Virhe tapahtui pysäkin poistamisessa: {details}',
  flexibleStopPlacesDeleteStopPlaceSuccessHeader: 'Poista pysäkkipiste',
  flexibleStopPlacesDeleteStopPlaceSuccessMessage: 'Pysäkki poistettiin',
  flexibleStopPlacesLoadStopPlaceErrorHeader: 'Lataa pysäkki',
  flexibleStopPlacesLoadStopPlaceErrorMessage:
    'Virhe tapahtui pysäkin lataamisessa: {details}',
  flexibleStopPlacesLoadStopPlacesErrorHeader: 'Lataa pysäkit',
  flexibleStopPlacesLoadStopPlacesErrorMessage:
    'Virhe tapahtui pysäkkien lataamisessa: {details}',
  flexibleStopPlacesSaveStopPlaceErrorHeader: 'Tallenna pysäkki',
  flexibleStopPlacesSaveStopPlaceErrorMessage:
    'Virhe tapahtui pysäkin tallentamisessa: {details}',
  flexibleStopPlacesSaveStopPlaceSuccessHeader: 'Tallenna pysäkki',
  flexibleStopPlacesSaveStopPlaceSuccessMessage: 'Pysäkki tallennettiin.',
  navBarIntroduction: 'Johdanto',
  navBarExportsMenuItemLabel: 'Viennit',
  navBarLinesMenuItemLabel: 'Linjat',
  navBarFlexibleOffersSubMenuHeaderLabel: 'Joustavat palvelut',
  navBarFlexibleLinesMenuItemLabel: 'Kutsujoukkoliikenne',
  navBarNetworksMenuItemLabel: 'Verkko',
  navBarBrandingsMenuItemLabel: 'Brändäykset',
  navBarRootLinkLogoAltText: 'Logo',
  navBarRootLinkText: '',
  navBarStopPlacesMenuItemLabel: 'Kutsujoukkoliikenteen pysäkit',
  userMenuLogoutLinkText: 'Kirjaudu ulos',
  userMenuMenuItemTextEnglish: 'English',
  userMenuMenuItemTextLanguage: 'Kieli',
  userMenuMenuItemTextNorwegian: 'Norsk',
  userMenuMenuItemTextSwedish: 'Svenska',
  userMenuMenuItemTextFinnish: 'Suomi',
  languagePickerAriaLabel: 'Valitse kieli',
  navBarDataProvider: 'Valitse tietojen tarjoaja',
  redirectTitle: 'Tallentamattomia muutoksia!',
  redirectMessage:
    'Sinulla on tallentamattomia muutoksia, jotka menetetään, jos siirryt pois tältä sivulta. Haluatko jatkaa?',
  redirectYes: 'Kyllä, poistu tästä sivulta',
  redirectNo: 'Ei, pysy tällä sivulla',
  appTitle: 'Rae',
  exportsCreateExportButtonLabel: 'Luo vienti',
  exportCreatorDryRunFormLabel: 'Testiajo',
  exportCreatorDryRunFormLabelTooltip:
    'Ei vie palvelua matkahakuun, mutta luo NeTEx-tiedoston katsottavaksi',
  exportCreatorGenerateServiceLinksFormLabel: 'Luo pysäkkigeometria',
  exportCreatorGenerateServiceLinksFormLabelTooltip:
    'Luo pysäkkejä yhdistävän geometrian',
  exportCreatorFromDateFormLabel: 'Alkaen päivämäärä *',
  exportCreatorHeader: 'Luo vienti',
  exportCreatorDescription:
    'Vie palvelut niin, että ne ovat saatavilla matkahauissa',
  exportCreatorNameFormLabel: 'Nimi *',
  exportCreatorSaveButtonLabelText: 'Luo vienti',
  exportCreatorSavingOverlayLoaderText: 'Tallennetaan vienti...',
  exportCreatorToDateFormLabel: 'Loppupäivämäärä *',
  exportCreatorDateForExport: 'Vientipäivämäärä',
  exportCreatorDateForExportDesc:
    'Vie palvelut, joilla on saatavuutta valitun ajanjakson sisällä',
  exportCreatorLinesForExportHeader: 'Valitse linjat vientiin',
  exportCreatorLinesForExportTableLineHeader: 'Linja',
  exportCreatorLinesForExportTableStatusHeader: 'Tila',
  exportCreatorLinesForExportTableAvailabilityHeader: 'Saatavuus',
  defaultOption: 'Valitse vaihtoehto',
  validateFormErrorExportFromDateIsAfterToDate:
    'Loppupäivämäärän on oltava alkupäivämäärän jälkeen',
  validateFormErrorExportNameIsEmpty: 'Nimi on annettava.',
  exportsDownloadLinkText: 'Lataa',
  exportsDryRunNo: 'Ei',
  exportsDryRunYes: 'Kyllä',
  exportsHeader: 'Viennit',
  exportsLoadingExportsText: 'Ladataan vientejä...',
  exportsNoExportsFoundText: 'Ei vientejä löydetty.',
  exportsTableHeaderLabelDownload: 'Lataa',
  exportsTableHeaderLabelDryrun: 'Testiajo',
  exportsTableHeaderLabelFromDate: 'Alkaen päivämäärä',
  exportsTableHeaderLabelName: 'Nimi',
  exportsTableHeaderLabelStatus: 'Tila',
  exportsTableHeaderLabelCreated: 'Aika',
  exportsTableHeaderLabelToDate: 'Loppupäivämäärä',
  viewerDownloadLabel: 'Lataa vietyjä tiedostoja',
  viewerDownloadLinkText: 'Lataa',
  viewerDryRunLabel: 'Testiajo',
  viewerDryRunNo: 'Ei',
  viewerDryRunYes: 'Kyllä',
  viewerGenerateServiceLinksLabel: 'Luo pysäkkigeometria',
  viewerGenerateServiceLinksNo: 'Ei',
  viewerGenerateServiceLinksYes: 'Kyllä',
  NO_VALID_FLEXIBLE_LINES_IN_DATA_SPACE:
    'Ei kelvollisia kutsuliikenteitä tietotilassa',
  failed: 'Epäonnistui',
  in_progress: 'Käynnissä',
  success: 'Onnistui',
  viewerFromDateLabel: 'Alkaen päivämäärä',
  viewerHeader: 'Vienti',
  viewerLoadingText: 'Ladataan vientiä...',
  viewerMessagesLabel: 'Viestit',
  viewerNameLabel: 'Nimi',
  viewerStatusLabel: 'Tila',
  viewerToDateLabel: 'Loppupäivämäärä',
  uttuErrorCONSTRAINT_VIOLATION: 'Ei ole ainutlaatuinen nimi',
  uttuErrorCONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME:
    'Palvelu lähdöllä on oltava ainutlaatuinen nimi',
  uttuErrorCONSTRAINT_VIOLATION_LINE_UNIQUE_NAME:
    'Linjalla on oltava ainutlaatuinen nimi',
  uttuErrorCONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME:
    'Pysäkkiketjulla on oltava ainutlaatuinen nimi',
  uttuErrorENTITY_IS_REFERENCED:
    'Kohdetta ei voi poistaa, koska sillä on {noOfLines, number} muuta {noOfLines, plural, one {kohde viittaa siihen} other {kohdetta viittaa siihen}}',
  uttuErrorFROM_DATE_AFTER_TO_DATE:
    'Aloitusajankohta ei voi olla loppuajankohdan jälkeen',
  uttuErrorMINIMUM_POINTS_IN_SEQUENCE:
    'Pysäkkiketjulla on oltava vähintään 2 peräkkäistä pysähdyspaikkaa.',
  uttuErrorMISSING_OPERATOR:
    'Palvelun lähdöllä tai linjalla on oltava operaattori',
  uttuErrorORGANISATION_NOT_VALID_OPERATOR: 'Virheellinen operaattori',
  uttuErrorNO_VALID_LINES_IN_DATA_SPACE:
    'Tietotilassa ei löytynyt kelvollisia linjoja vientiä tehdessä',
  uttuErrorNO_EMPTY_NOTICES: 'Tyhjiä ilmoituksia ei sallita.',
  uttuErrorFLEXIBLE_LINE_REQUIRES_BOOKING:
    'Kutsujoukkoliikenteet vaativat varaustietoja linjalla, pysäkkiketjulla tai pysäkillä',
  uttuErrorINVALID_POLYGON:
    'Kutsujoukkoliikenteellä on monikulmio, jolla on virheellinen geometria',
  uttuErrorUNKNOWN: 'Tuntematon virhe',
  linesCreateFlexibleLineIconButtonLabel: 'Luo kutsujoukkoliikenne',
  linesCreateLineIconButtonLabel: 'Luo linja',
  linesFlexibleDataCell: 'Kutsu',
  bookingInfoHeader: 'Varaustiedot',
  bookingInfoHelpText:
    'Kutsujoukkoliikenteelle voidaan lisätä varaustiedot pysäkeille (osana linjatietoa) tai liikennöintikalenterille. Jos määrittelet varaustiedot useammalle kuin yhdelle tasolle pysäkkikohtaiset varaustiedot ovat ensisijaisia.',
  bookingInfoAddButtonText: 'Lisää',
  bookingInfoRemoveButtonText: 'Poista',
  bookingInfoShowEditButtonText: 'Näytä / Muokkaa',
  bookingInfoSaveButtonText: 'Tallenna',
  bookingInfoCancelButtonText: 'Peruuta',
  bookingInfoText: 'Tiedot siitä, miten palvelua voidaan varata.',
  bookingLabel:
    'Varauksen tekemisen helpottamiseksi suosittelemme täyttämään Puhelin, URL ja Varausmerkintä.',
  bookingAccessAuthorisedPublic: 'Valtuutettu julkinen',
  bookingAccessPublic: 'Julkinen',
  bookingAccessStaff: 'Henkilökunta',
  bookingAccessSelectionTitle: 'Varausoikeus',
  bookingLimitTypeNoneRadioButtonLabel: 'Ei mitään',
  bookingLimitFieldsBookingLimitTypePeriodRadioButtonLabel:
    'Varauksen on oltava tehty vähintään tämä aika ennen lähtöä',
  bookingLimitFieldsBookingLimitTypeTimeRadioButtonLabel:
    'Viimeisin mahdollinen varausaika',
  bookingLimitFieldsHeaderLabel: 'Varausraja',
  bookingMethodCallDriver: 'Soita kuljettajalle',
  bookingMethodCallOffice: 'Soita toimistolle',
  bookingMethodOnline: 'Verkossa',
  bookingMethodPhoneAtStop: 'Puhelin pysäkillä',
  bookingMethodText: 'Tekstiviesti',
  bookingMethodSelectionTitle: 'Varausmenetelmä',
  bookingNoteFieldTitle: 'Varausmerkintä',
  bookingNoteRequiredFeedback: 'Varausmerkintä vaaditaan.',
  bookingNoteTooltip: 'Tiedot, jotka voidaan esittää matkatiedon yhteydessä.',
  purchaseWhenAdvanceAndDayOfTravel: 'Ennakko ja matkapäivä',
  purchaseWhenDayOfTravelOnly: 'Vain matkapäivä',
  purchaseWhenUntilPreviousDay: 'Edellisenä päivänä asti',
  contactFieldsContactPersonTitle: 'Yhteyshenkilö',
  contactFieldsEmailTitle: 'Sähköposti',
  contactFieldsFurtherDetailsTitle: 'Lisätiedot',
  contactFieldsPhoneTitle: 'Puhelin',
  contactFieldsUrlTitle: 'URL',
  urlOrPhoneMustBeFilled:
    'Vähintään URL:n tai puhelinnumeron on oltava täytetty',
  purchaseMomentAfterBoarding: 'Kyytiin nousun jälkeen',
  purchaseMomentBeforeBoarding: 'Ennen kyytiin nousua',
  purchaseMomentOnCheckOut: 'Matkan päättymisen jälkeen',
  purchaseMomentOnReservation: 'Varauksen yhteydessä',
  paymentSelectionTitle: 'Maksu',
  bookingTimeSelectionTitle: 'Varausaika',
  editorBookingTabLabel: 'Varaus',
  bookingValidationError:
    'Varaustietojen on sisällettävä varausaika tai vähimmäisvarausaika',
  editorCreateLineHeader: 'Luo linja',
  editorDeleteButtonText: 'Poista',
  editorCopyButtonText: 'Kopioi',
  editorDeleteConfirmationDialogCancelButtonText: 'Ei',
  editorDeleteConfirmationDialogConfirmButtonText: 'Kyllä',
  editorDeleteLineConfirmationDialogMessage:
    'Haluatko varmasti poistaa tämän linjan?',
  editorDeleteLineConfirmationDialogTitle: 'Poista linja',
  editorDeleteLineLoadingText: 'Poistetaan linjaa...',
  editorDeleteStopPlaceConfirmationDialogMessage:
    'Haluatko varmasti poistaa tämän joustavan pysäkin?',
  editorDeleteStopPlaceConfirmationDialogTitle: 'Poista joustava pysäkki',
  editorDeleteNetworkConfirmationDialogMessage:
    'Haluatko varmasti poistaa tämän verkon?',
  editorDeleteNetworkConfirmationDialogTitle: 'Poista verkko',
  editorEditLineHeader: 'Muokkaa linjaa',
  generalDescriptionFormGroupTitle: 'Kuvaus',
  generalNameFormGroupTitle: 'Nimi *',
  generalNetworkFormGroupTitle: 'Verkko *',
  generalOperatorFormGroupTitle: 'Operaattori *',
  transportModeTitle: 'Kulkutapa *',
  transportSubModeTitle: 'Alakulkutapa *',
  generalPrivateCodeFormGroupTitle: 'Yksityinen tunnus',
  generalPrivateCodeInputLabelTooltip:
    'Yksityinen tunnus on se, mikä tunnistaa linjan sisäisesti operaattorille',
  generalPublicCodeFormGroupTitle: 'Julkinen tunnus {requiredMarker}',
  generalPublicCodeInputLabelTooltip:
    'Julkinen tunnus on se, mikä tunnistaa linjan ulkoisesti matkustajille',
  generalTypeFormGroupTitle: 'Joustavan linjan tyyppi *',
  typeFormGroupTitleTooltip: 'Lue lisää linjatyypeistä',
  editorGeneralTabLabel: 'Yleinen',
  generalDrawer: 'Alla on lyhyt kuvaus kustakin linjatyypistä.',
  drawerAria: 'Lue lisää erilaisista linjatyypeistä.',
  generalDrawerTitle: 'Kutsujoukkoliikenteen muodot',
  flexibleLineType_fixed: 'Pysäkkipohjainen',
  flexibleLineType_flexibleAreasOnly: 'Kutsualueet',
  flexibleLineType_mixedFlexible: 'Osin joustava',
  flexibleLineTypeDrawer_fixed:
    'Kiinteä ja aikataulutettu reitti, joka on tilattava etukäteen.',
  flexibleLineTypeDrawer_mainRouteWithFlexibleEnds:
    'Pysäkkipohjainen reitti pysäkkipohjaisiin aikoihin, mahdollisuudella varata nousu tai nousu pois pysähdyspaikoilta reitin ulkopuolelta.',
  flexibleLineTypeDrawer_fixedStopAreaWide:
    'Joustava reitti, joka on määritelty yhdellä tai useammalla alueella, joissa kullakin alueella voi olla erilaisia ennalta määriteltyjä pysäkkejä.',
  flexibleLineTypeDrawer_flexibleAreasOnly:
    'Liikennevälineeseen nousu ja poistuminen perustuen kutsualueeseen ja liikennöintiaikoihin.',
  flexibleLineTypeDrawer_hailAndRideSections:
    'Reitti on määritelty, mutta valituilla osuuksilla on mahdollista nousta tai poistua milloin tahansa.',
  flexibleLineTypeDrawer_mixedFlexible:
    'Osin joustava, määrättyjä pysäkkejä ja kutsualueita yhdistelevä liikenne, joka sisältää aikataulutettuja pysäkkejä.',
  journeyPatternsAddJourneyPatternIconButtonLabel: 'Lisää pysäkkiketju',
  journeyPatternsUnsavedChanges: 'Sinulla on tallentamattomia muutoksia.',
  journeyPatternsSaveAndContinue: 'Tallenna ja jatka',
  editorAbout: 'Tietoja linjasta',
  editorFillInformation:
    'Pysäkkiketju kuvailee palvelun linjakuvioita tai aluetta, johon palvelu toimii, koostuen pysäkeistä pitkin linjaa tai alueista, joilla palvelu toimii.',
  stepperAbout: 'Yleinen',
  stepperJourneyPattern: 'Pysäkkiketju',
  stepperServiceJourney: 'Linjan kalenterit',
  stepperBooking: 'Varausinfo',
  editorStopPoints: 'Lisää pysäkit, jotka määrittelevät palvelun',
  editorStopPointFlexibleAreaOnly:
    'Määrittele palvelua kuvaavat joustavat pysäkit',
  stopPointsInfo:
    'Sinun on lisättävä vähintään kaksi pysäkkipistettä; yksi aloitusta ja yksi pysähtymistä varten. Valitse joustavien pysähdyspaikkojen ja laituritunnusten väliltä pysäkkitietokannasta.',
  stopPointsInfoFixed:
    'Sinun on lisättävä vähintään kaksi pysäkkipistettä; yksi aloitusta ja yksi pysähtymistä varten. Kirjoita laituritunnus pysäkkitietokannasta.',
  stopPointsMapInfo:
    'Sinun on lisättävä vähintään kaksi pysäkkipistettä; yksi aloitusta ja yksi pysähtymistä varten.',
  stopPointsInfoFlexibleAreaOnly:
    'Tämäntyyppinen kutsulinja sallii vain yhden joustavan pysähdyspaikan, jossa kaikki nousut ja poistumiset tapahtuvat.',
  stopPointsInfoMixedFlexible:
    'Lisää vähintään kaksi pysäkkiä pysäkkipohjaiselle kutsuliikenteelle siinä aikataulun mukaisessa järjestyksessä.',
  deleteStopPointDialogTitle: 'Poista pysäkkipiste',
  deleteStopPointDialogMessage:
    'Haluatko varmasti poistaa tämän pysäkkipisteen?',
  selectCustom: 'Joustava pysäkki',
  selectNsr: 'Pysäkki',
  editorServiceJourneys: 'Linjan kalenterit',
  newServiceJourneyModalTitle: 'Lisää uusi lähtö palvelulle',
  newServiceJourneyModalSubTitle:
    'Anna nimi, valitse reittikuviointi ja paina Luo',
  newServiceJourneyModalCancel: 'Peruuta',
  newServiceJourneyModalCreate: 'Luo',
  newServiceJourneyModalNameLabel: 'Nimi',
  newServiceJourneyModalPlaceholder: 'Esimerkiksi "Maitoreitti viikonloppuna"',
  newServiceJourneyModalJourneyPatternLabel: 'Valitse pysäkkiketju',
  serviceJourneysInfo:
    'Luo erilaisia lähtöjä palvelulle eri ajankohdille. Esimerkiksi arkipäiville ja viikonlopulle.',
  dayTypesEditorSelectLabel: 'Valitse päivätyypit tälle palvelun lähdölle',
  dayTypesModalTitle: 'Muokkaa päivätyyppejä',
  dayTypesModalAddNewButtonLabel: 'Lisää päivätyyppi',
  dayTypesModalIdHeader: 'NeTEx-tunnus',
  dayTypesModalNameHeader: 'Nimi',
  dayTypesModalUsedByHeader: 'Käytössä',
  dayTypeNoName: 'Ei nimeä',
  dayTypeInUse: 'Kyllä',
  dayTypeNotInUse: 'Ei',
  dayTypeAssignmentAvailableLabel: 'Saatavilla',
  dayTypeEditorWeekdays: 'Viikonpäivät saatavuudelle',
  weekdaysError: 'Täytä saatavuus.',
  dayTypeEditorNameFieldLabel: 'Nimi',
  dayTypeEditorNameFieldLabelTooltip:
    'Auttaaksesi tunnistamaan päivätyyppi-olentoja Rakeessa',
  dayTypeEditorDateAvailability: 'Palvelun saatavuus',
  dayTypeEditorDateTooltip: 'Määritä palvelun voimassaolo',
  dayTypeEditorAddDayTypeAssignment: 'Lisää päivämäärä',
  dayTypeEditorNoDayTypeAssignments: 'Päivämääriä ei ole määritelty.',
  dayTypeEditorDate: 'Päivämäärä',
  dayTypeEditorFromAndToDate: 'Käytä alkupäivästä ja loppupäivästä',
  dayTypeEditorFromDate: 'Alkaen (sisältyen) *',
  dayTypeEditorToDate: 'Asti (sisältyen) *',
  dayTypeEditorToDateValidation: 'Vähintään yksi päivä alkupäivämäärän jälkeen',
  dayTypesEditButton: 'Muokkaa päivätyyppejä',
  deleteDayTypesErrorTitle: 'Virhe päivätyyppien poistossa',
  deleteSelectedDayTypesButtonLabel: 'Poista valitut päivätyypit',
  passingTimesEditorError: 'Tarvitset kelvolliset kulkuajat.',
  editorAddStopPoint: 'Lisää pysäkki',
  editorAddServiceJourneys: 'Luo lisää lähtöjä palvelulle',
  editorAddJourneyPatterns: 'Luo lisää pysäkkiketjuja',
  editorEdit: 'Muokkaa',
  editorCreate: 'Luo uusi',
  editorDetailedCreate: 'Luo uusi {details}',
  stopPointsAtleastTwoPoints: 'Vähintään kaksi pysäkkiä',
  stopPointsAtleastTwoPointsDetailed:
    'Pysäkkiketju vaatii vähintään kaksi pysäkkipistettä.',
  generalDescriptionLabel: 'Kuvaus',
  generalDirectionLabel: 'Suunta',
  generalNameLabel: 'Nimi *',
  generalPrivateCodeLabel: 'Yksityinen tunnus',
  generalPrivateCodeLabelTooltip:
    'Yksityinen tunnus on se, mikä tunnistaa pysäkkiketjun sisäisesti operaattorille',
  generalValidationName: 'Sinun on annettava nimi.',
  tableDeleteConfirmDialogCancelButtonText: 'Ei',
  tableDeleteConfirmDialogConfirmButtonText: 'Kyllä',
  tableDeleteConfirmDialogMessage:
    'Haluatko varmasti poistaa tämän pysäkkiketjun?',
  tableDeleteConfirmDialogTitle: 'Poista pysäkkiketju',
  tableDirectionTableHeaderCellLabel: 'Suunta',
  tableNameTableHeaderCellLabel: 'Nimi',
  tableNewJourneyPatternDefaultText: 'Uusi pysäkkiketju',
  tableNoJourneyPatternsText: 'Ei pysäkkiketjua.',
  tableServiceJourneysTableHeaderCellLabel: 'Palvelun lähdöt',
  tableStopPlacesTableHeaderCellLabel: 'Pysäkit ja alueet',
  editorJourneyPatternsTabLabel: 'Pysäkkiketju',
  newJourneyPatternModalTitle: 'Uusi pysäkkiketju',
  newJourneyPatternModalSubTitle: 'Anna nimi ja paina Luo',
  newJourneyPatternModalUniqueName:
    'Pysäkkiketjulla on oltava ainutlaatuinen nimi',
  newJourneyPatternModalCancel: 'Peruuta',
  newJourneyPatternModalCreate: 'Luo',
  newJourneyPatternModalLabel: 'Nimi *',
  newJourneyPatternModalPlaceholder: 'Esimerkiksi "Paikallisreitti"',
  editorLoadingLineText: 'Lataa linja',
  editorLoadingNetworkAndStopsText: 'Lataa verkko ja pysäkit',
  editorSaveButtonText: 'Tallenna',
  editorSaveAndCreateLine: 'Tallenna linja',
  editorSaveLineLoadingText: 'Linjan tallennus...',
  fixErrorsInTheFollowingSteps:
    'Sinun on korjattava virheet seuraavissa vaiheissa:',
  navigationNext: 'Seuraava',
  navigationCancel: 'Peruuta',
  navigationPrevious: 'Edellinen',
  linesHeader: 'Linjat',
  flexibleLinesHeader: 'Kutsulinjat',
  labelForAlighting: 'Poistumista varten',
  labelForBoarding: 'Nousua varten',
  labelForBoardingAndAlighting: 'Nousua ja poistumista varten',
  labelFrontText: 'Etuteksti',
  labelFrontTextRequired: 'Etuteksti *',
  labelBoarding: 'Nousu/poistuminen',
  labelQuayRef: 'Laituritunnus *',
  flexibleStopPlaceRefAndQuayRefBothValues:
    'Valitse joko pysäkki tai laituri, ei molempia.',
  flexibleStopPlaceRefAndQuayRefNoValues: 'Sinun on valittava paikka',
  flexibleStopPlaceNoValue: 'Sinun on valittava pysäkki',
  frontTextNoValue: 'Sinun on annettava etuteksti',
  frontTextAlighting: 'Ensimmäinen pysäkki voi olla vain nousua varten',
  frontTextBoarding: 'Viimeinen pysäkki voi olla vain poistumista varten',
  quayRefInvalid: 'Virheellinen laiturin tunnus',
  quaySearchResults_loadingLabel: 'Etsitään...',
  quaySearchResults_quayNotFoundLabel: 'Laituria ei löytynyt',
  yes: 'Kyllä',
  no: 'Ei',
  tableName: 'Nimi',
  tableFrontText: 'Etuteksti',
  frontTextTooltip: 'Teksti, joka näkyy ajoneuvon edessä',
  tableBoarding: 'Nousu',
  tableAlighting: 'Poistuminen',
  tableDefaultValue: '- Uusi pysäkkipiste -',
  tableNoStopPoints: 'Ei pysäkkejä',
  tableDeleteTitle: 'Poista pysäkkipiste',
  tableDeleteMessage: 'Haluatko varmasti poistaa tämän pysäkin?',
  serviceJourneyAvailability: 'Saatavuus',
  serviceJourneyPassingTimes: 'Ohitusaikojen määrittäminen',
  serviceJourneyBusinessHours: 'Liikennöintiaijat',
  serviceJourneyMixedFlexiblePassingTimes:
    'Ohitusaikojen ja aikavälien määrittäminen',
  passingTimesInfo: 'Anna ohitusaika eri pysäkeille.',
  passingTimesInfoFlexibleAreasOnly:
    'Anna palveluajat kutsujoukkoliikennepalvelulle.',
  passingTimesInfoMixedFlexible:
    'Anna ohitus- ja liikennöintiaikoja pysäkkipohjaisille kutsuliikennealueille.',
  serviceJourneyBooking: 'Varaus',
  generalName: 'Nimi *',
  nameIsRequired: 'Nimi vaaditaan.',
  generalDescription: 'Kuvaus',
  generalAvailability: 'Saatavuus',
  generalPrivateCode: 'Yksityinen tunnus',
  generalPrivateCodeTooltip:
    'Yksityinen tunnus on se, mikä tunnistaa palvelumatkan sisäisesti operaattorille',
  generalPublicCode: 'Julkinen tunnus',
  generalPublicCodeTooltip:
    'Julkinen tunnus on se, mikä tunnistaa palvelumatkan ulkoisesti matkustajille',
  generalOperator: 'Operaattori',
  journeyPatternDeleteDialogTitle: 'Poista pysäkkiketju',
  journeyPatternDeleteDialogMessage:
    'Haluatko varmasti poistaa tämän pysäkkiketjun?',
  serviceJourneyDeleteTitle: 'Poista palvelumatka',
  serviceJourneydeleteMessage:
    'Haluatko varmasti poistaa tämän lähdön palvelulta?',
  linesLoadingText: 'Ladataan linjoja...',
  linesNameTableHeaderLabel: 'Nimi',
  linesNoLinesFoundText: 'Ei linjoja löytynyt.',
  linesOperatorTableHeader: 'Operaattori',
  linesPublicCodeTableHeaderLabel: 'Julkinen tunnus',
  linesPrivateCodeTableHeaderLabel: 'Yksityinen tunnus',
  nameEmpty: 'Nimi vaaditaan.',
  publicCodeEmpty: 'Julkinen tunnus vaaditaan.',
  networkRefEmpty: 'Sinun on valittava verkko.',
  operatorRefEmpty: 'Sinun on valittava operaattori.',
  transportModeEmpty: 'Sinun on valittava kulkumuoto.',
  transportSubModeEmpty: 'Sinun on valittava alakulkumuoto.',
  flexibleLineTypeEmpty: 'Sinun on valittava tyyppi.',
  homePage: 'Kotisivu',
  networkAuthorityMissing: 'Verkko puuttuu',
  networkAuthorityMissingDetails:
    'Tälle tietojentuottajalle ei ole luotu viranomaisia. Ota yhteyttä järjestelmänvalvojiin saadaksesi apua.',
  networksAuthorityTableHeaderLabel: 'Viranomainen',
  editorNetworkAuthorityLabelText: 'Viranomainen *',
  editorCreateNetworkHeaderText: 'Luo verkko',
  editorNetworkDescription:
    'Vähintään yksi verkko on tarpeen. Verkkoja voidaan käyttää linjojen ryhmittelyyn.',
  editorNetworkValidationAuthority: 'Viranomainen vaaditaan',
  editorNetworkValidationName: 'Nimi vaaditaan',
  editorDeleteNetworkConfirmDialogCancelText: 'Ei',
  editorDeleteNetworkConfirmDialogConfirmText: 'Kyllä',
  editorDeleteNetworkConfirmDialogMessage:
    'Haluatko varmasti poistaa tämän verkon?',
  editorDeleteNetworkConfirmDialogTitle: 'Poista verkko',
  editorDeletingNetworkLoadingText: 'Poistetaan verkkoa...',
  editorNetworkDescriptionLabelText: 'Kuvaus',
  editorEditNetworkHeaderText: 'Muokkaa verkkoa',
  editorLoadingNetworkText: 'Ladataan verkkoa...',
  editorNetworkNameLabelText: 'Nimi *',
  editorNetworkPrivateCodeLabelText: 'Yksityinen tunnus',
  editorSavingNetworkLoadingText: 'Verkon tallennus...',
  network: 'verkko',
  networksHeaderText: 'Verkot',
  networksLoadingNetworksText: 'Ladataan verkkoja...',
  networksNameTableHeaderLabel: 'Nimi',
  networksNoNetworksFoundText: 'Ei verkkoja löytynyt',
  networksPrivateCodeTableHeaderLabel: 'Yksityinen tunnus',
  branding: 'brändi',
  brandingsHeaderText: 'Brändit',
  brandingsLoadingBrandingsText: 'Ladataan brändejä...',
  brandingsNameTableHeaderLabel: 'Nimi',
  brandingsNoBrandingsFoundText: 'Yhtään brändiä ei löytynyt',
  brandingsShortNameTableHeaderLabel: 'Lyhyt nimi',
  brandingsDescriptionTableHeaderLabel: 'Kuvaus',
  brandingsUrlTableHeaderLabel: 'URL',
  brandingsImageUrlTableHeaderLabel: 'Kuvan URL',
  editorCreateBrandingHeaderText: 'Luo brändi',
  editorBrandingDescription:
    'Brändejä voidaan käyttää oman brändin lisäämiseen linjoille ja verkoille.',
  editorBrandingNameLabelText: 'Nimi *',
  editorBrandingShortNameLabelText: 'Lyhyt nimi',
  editorBrandingDescriptionLabelText: 'Kuvaus',
  editorBrandingUrlLabelText: 'URL',
  editorBrandingImageUrlLabelText: 'Kuvan URL',
  editorBrandingValidationName: 'Nimi on pakollinen',
  editorDeleteBrandingConfirmDialogTitle: 'Poista brändi',
  editorDeleteBrandingConfirmDialogMessage:
    'Oletko varma, että haluat poistaa tämän brändin?',
  editorEditBrandingHeaderText: 'Muokkaa brändiä',
  editorDeleteBrandingConfirmDialogCancelText: 'Ei',
  editorDeleteBrandingConfirmDialogConfirmText: 'Kyllä',
  editorDeleteBrandingConfirmationDialogTitle: 'Poista brändi',
  editorDeleteBrandingConfirmationDialogMessage:
    'Oletko varma, että haluat poistaa tämän brändin?',
  brandingsDropdownLabelText: 'Brändi',
  stopPlacesCreateStopPlaceLinkIconLabelText: 'Luo joustava pysäkki',
  stopPlaceText: 'Joustava pysäkki',
  stopPlace: 'Joustava pysäkki *',
  editorDescription:
    'Anna luettelo koordinaateista GeoJSON-muodossa tai napsauta kartalla luodaksesi monikulmion.',
  editorCreateHeader: 'Luo joustava pysähdyspaikka',
  delete: 'Poista',
  editorDeleteStopPlaceDialogCancelButtonText: 'Ei',
  editorDeleteStopPlaceDialogConfirmButtonText: 'Kyllä',
  editorDeleteStopPlaceDialogMessage: 'Haluatko varmasti poistaa tämän pysäkin',
  editorDeleteStopPlaceDialogTitle: 'Poista pysäkkipiste',
  editorDeletingOverlayLoaderText: 'Poistetaan pysäkki...',
  editorDescriptionFormLabelText: 'Kuvaus',
  editorEditHeader: 'Muokkaa joustavaa pysäkkiä',
  errorCoordinates: 'Koordinaatit ovat virheellisessä muodossa',
  editorLoadingDependenciesText: 'Ladataan riippuvuuksia',
  editorLoadingStopPlaceText: 'Ladataan pysäkkiä',
  editorNameFormLabelText: 'Nimi *',
  editorPrivateCodeFormLabelText: 'Yksityinen tunnus',
  editorCoordinatesFormLabelText:
    'Koordinaatit GeoJson-järjestyksessä [Pituus, Lat]',
  editorDrawPolygonButtonText: 'Piirrä koordinaatit kartalle',
  save: 'Tallenna',
  editorSavingOverlayLoaderText: 'Pysäkin tallennus...',
  validateFormErrorFlexibleAreaNotEnoughPolygons:
    'Sinun on lisättävä karttapisteitä',
  validateFormErrorNameEmpty: 'Sinun on annettava nimi',
  validateFormErrorFlexibleStopPlaceType:
    'Pysäkillä tai jokaisella alueella on oltava tyyppi',
  stopPlacesHeader: 'Joustavat pysäkit',
  stopPlacesLoadingStopPlacesText: 'Ladataan pysäkkejä...',
  stopPlacesNameTableHeaderLabelText: 'Nimi',
  stopPlacesNoStopPlacesFoundText: 'Pysäkkejä ei löytynyt.',
  stopPlacesNumberOfAreasTableHeaderLabelText: 'Alueiden lukumäärä',
  stopPlacesPrivateCodeTableHeaderLabelText: 'Yksityinen tunnus',
  stopPlaceAreaLabelPrefix: 'Alue',
  stopPlaceAddAreaButtonLabel: 'Lisää alue',
  stopPlaceRemoveAreaButtonLabel: 'Poista alue',
  passingTimesTypeFixed: 'Pysäkkipohjainen',
  passingTimesTypeFlexible: 'Joustava',
  passingTimesArrivalTime: 'Saapumisaika',
  passingTimesDepartureTime: 'Lähtöaika',
  passingTimesLatestArrivalTime: 'Loppu',
  passingTimesEarliestDepartureTime: 'Aloita',
  passingTimesDayOffset: 'Päiväoffsetti',
  passingTimesDayOffsetTooltip:
    'Aseta päiväoffsetti, jos kulkuajat ovat päivän tai enemmän palvelun lähdön jälkeen',
  errorAllPassingTimesMustBeFilled:
    'Kaikkien ohitusaikojen on oltava asetettu.',
  errorDepartureAfterArrival: 'Lähtöaika ei voi olla ennen saapumisaikaa.',
  errorDepartureAfterEarliest:
    'Lähtöaika ei voi olla ennen aikaisinta lähtöaikaa.',
  errorArrivalBeforeLatest:
    'Saapumisaika ei voi olla myöhäisempi kuin viimeisin saapumisaika.',
  errorLaterThanPrevious:
    'All specified times must be later than previous stop point',
  errorLastArrivalMustBeSet:
    'Saapumisaika tai viimeisin saapumisaika viimeiselle pysäkille on asetettava.',
  errorStopPoints: 'Sinun on luotava vähintään kaksi pysäkkiä.',
  errorARowIsMissingData: 'Vähintään yhden rivin kulkuaikoja puuttuu.',
  weekdaysMonday: 'Maanantai',
  weekdaysTuesday: 'Tiistai',
  weekdaysWednesday: 'Keskiviikko',
  weekdaysThursday: 'Torstai',
  weekdaysFriday: 'Perjantai',
  weekdaysSaturday: 'Lauantai',
  weekdaysSunday: 'Sunnuntai',
  requiredInputMarker: 'Tähdellä (*) merkityt kentät ovat pakollisia',
  air: 'Ilma',
  bus: 'Linja-auto',
  cableway: 'Kaapelihissi',
  coach: 'Kaukoliikennebussi',
  funicular: 'Hissi',
  metro: 'Metro',
  rail: 'Juna',
  tram: 'Raitiovaunu',
  water: 'Vesi',
  taxi: 'Taksi',
  domesticFlight: 'Kotimaan lento',
  helicopterService: 'Helikopteripalvelu',
  internationalFlight: 'Kansainvälinen lento',
  airportLinkBus: 'Lentokenttäyhteysliikenne',
  expressBus: 'Pikavuoro',
  localBus: 'Paikallisliikenne',
  nightBus: 'Yölinja',
  railReplacementBus: 'Junakorvaus',
  regionalBus: 'Seudullinen liikenne',
  schoolBus: 'Kouluvuoro',
  shuttleBus: 'Pendelöintivuoro',
  sightseeingBus: 'Sightseeing-bussi',
  sightseeingService: 'Sightseeing-palvelu',
  telecabin: 'Hiihtohissi',
  internationalCoach: 'Kansainvälinen linja-auto',
  nationalCoach: 'Kansallinen linja-auto',
  touristCoach: 'Turistibussi',
  airportLinkRail: 'Lentokenttäyhteysjuna',
  international: 'Kansainvälinen',
  interregionalRail: 'Alueiden välinen juna',
  local: 'Paikallisjuna',
  longDistance: 'Kaukoliikenteen juna',
  nightRail: 'Yöjuna',
  regionalRail: 'Alueellinen juna',
  touristRailway: 'Turistijuna',
  cityTram: 'Kaupungin raitiovaunu',
  localTram: 'Paikallisraitiovaunu',
  highSpeedPassengerService: 'Pikajunapalvelu',
  highSpeedVehicleService: 'Pikarahtipalvelu',
  internationalCarFerry: 'Kansainvälinen autolautta',
  internationalPassengerFerry: 'Kansainvälinen matkustajalautta',
  localCarFerry: 'Paikallinen autolautta',
  localPassengerFerry: 'Paikallinen matkustajalautta',
  nationalCarFerry: 'Kansallinen autolautta',
  charterTaxi: 'Taksi',
  communalTaxi: 'Reittitaksi',
  waterTaxi: 'Vesitaksi',
  timeUnitPickerYearsLabel: 'Vuodet',
  timeUnitPickerMonthsLabel: 'Kuukaudet',
  timeUnitPickerDaysLabel: 'Päivät',
  timeUnitPickerHoursLabel: 'Tunnit',
  timeUnitPickerMinutesLabel: 'Minuutit',
  timeUnitPickerSecondsLabel: 'Sekunnit',
  timeUnitPickerResetLabel: 'Palauta',
  timeUnitPickerDoneLabel: 'Valmis',
  copyServiceJourneyDialogTitle: 'Kopioi palvelumatka',
  copyServiceJourneyDialogNameTemplateLabel: 'Nimipohja',
  copyServiceJourneyDialogDepartureTimeLabel: 'Lähtöaika',
  copyServiceJourneyDialogLatestPossibleDepartureTimelabel:
    'Viimeisin mahdollinen lähtöaika',
  copyServiceJourneyDialogCancelButtonText: 'Peruuta',
  copyServiceJourneyDialogSaveButtonText: 'Luo kopiot',
  copyServiceJourneyDialogValidationUntilTimeBeforeInitialTimeError:
    'Last possible departure time can',
  copyServiceJourneyDialogMultipleSwitchLabel: 'Luo useita kopioita',
  copyServiceJourneyDialogIntervalLabel: 'Valitse väli',
  noticesHeader: 'Ilmoitukset',
  newNoticeLabel: 'Uusi ilmoitus',
  deleteNoticeTooltip: 'Poista ilmoitus',
  addNoticeTooltip: 'Lisää ilmoitus',
  flexibleStopAreaType: 'Pysäkin tyyppi',
  flexibleStopAreaTypeNotSet: 'Ei määritelty',
  flexibleStopAreaTypeMixed: 'Sekoitus',
  flexibleStopAreaTypeUnrestrictedRoadNetwork:
    'Missä tahansa monikulmion sisällä',
  flexibleStopAreaTypeUnrestrictedPublicTransportAreas:
    'Vain pysäkeillä monikulmion sisällä',
  openBulkDeleteDialogButtonLabel: 'Massapoisto',
  bulkDeleteDialogTitle: 'Massapoisto',
  bulkDeleteDialogFilterSearchLabel: 'Suodata nimen perusteella',
  bulkDeleteDialogNameHeader: 'Nimi',
  bulkDeleteDialogDepartureHeader: 'Lähtö',
  bulkDeleteDialogDepartureDayOffsetHeader: 'Päiväoffsetti',
  bulkDeleteDialogValidityHeader: 'Voimassaolo',
  bulkDeleteDialogCancelButtonLabel: 'Peruuta',
  bulkDeleteDialogConfirmButtonLabel: 'Poista',
  dayTypesValidationError:
    'Vähintään yksi voimassaoloaika ei ole saatavilla viikonpäivälle',
  providersHeaderText: 'Tietojentuottajat',
  createProviderHeaderText: 'Luo tietojentuottaja',
  providersLoading: 'Ladataan tietojentuottajia',
  provider: 'tietojentuottaja',
  navBarProvidersMenuItemLabel: 'Tietojentuottajat',
  providersNameTableHeaderLabel: 'Nimi',
  providersCodeTableHeaderLabel: 'Tunnus',
  providersCodespaceXmlnsHeaderLabel: 'XML-nimiavaruus',
  providersCodespaceXmlnsUrlHeaderLabel: 'XML-nimiavaruus-url',
  editorEditProviderHeaderText: 'Muokkaa tietojentuottajaa',
  editorCreateProviderHeaderText: 'Luo tietojentuottaja',
  editorProviderNameLabelText: 'Nimi *',
  editorProviderCodeLabelText: 'Tunnus *',
  editorProviderCodespaceXmlnsLabelText: 'XML-nimiavaruus *',
  editorProviderCodespaceXmlnsUrlLabelText: 'XML-nimiavaruus-url *',
  editorProviderValidationField: 'Pakollinen kenttä',
  editorSavingProviderLoadingText: 'Tietojentuottajan tallennus...',
  editorLoadingProviderText: 'Tietojentuottajan lataus',
  saveProviderError: 'Virhe tallennettaessa tietojentuottajaa',
  saveProviderErrorFallback:
    'Tuntematon virhe tallennettaessa tietojentuottajaa',
  noProvidersDescriptionText:
    'RAE-asennuksesi tarvitsee vähintään yhden tietojentuottajan',
  landingPageNotLoggedIn: 'Ikke logget inn',
  landingPageLoginButtonText: 'Logg inn',
  // Journey patterns map:
  showQuays: 'Näytä laiturit',
  hideQuays: 'Piilota laiturit',
  oneQuay: '1 laituri',
  numberOfQuays: '{count} laituria',
  addToJourneyPattern: 'Lisää',
  showNonSelectedQuays: 'Näytä  ei-valitut laiturit',
  hideNonSelectedQuays: 'Piilota ei-valitut laiturit',
  quayOrder: 'Järjestys',
  mapSearchInProgress: 'Haetaan...',
  mapSearchNoResults: 'Ei löytynyt tuloksia',
  mapSearchResults: 'Tulokset',
  mapSearchPlaceholder: 'Pysäkki ID, nimi tai laituri ID',
  mapLoadingStopsDataText: 'Ladataan pysäkit...',
  locateStopPoint: 'Näytä',
  locateStopPointTooltip: 'Näytä kartalla',
  dropdownNoMatchesText: 'Ei valintoja',
  exportsDownloadUnsupportedBrowserTitle: 'Tätä selainta ei tueta',
  exportsDownloadUnsupportedBrowserMessage:
    'Käyttämäsi selain ei tue tiedostojen lataamista.',
  exportsDownloadErrorTitle: 'Lataus epäonnistui',
  exportsDownloadErrorMessage:
    'Latauksen aikana tapahtui odottamaton virhe. Yritä uudelleen.',
  selectAll: 'Valitse kaikki',
  clearAll: 'Poista kaikki valinnat',
  clearSelected: 'Poista valinta',
  copyJourneyPatternDialogTitle: 'Kopioi pysäkkiketju',
  copyJourneyPatternDialogNameTemplateLabel: 'Nimi *',
  copyJourneyPatternDialogCancelButtonText: 'Peruta',
  copyJourneyPatternDialogSaveButtonText: 'Luo kopio',
  copyInstance: 'kopio',
  journeyPatternDuplicateNameValidationError:
    'Pysäkkiketjulla on oltava ainutlaatuinen nimi',
};
