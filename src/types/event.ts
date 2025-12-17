export type EventType = {
    id: number,
    eventType: string;
    eventName: string;
    date: string;
    time: string;
    startTime: string;
    endTime: string;
    location: string;
    gpsCoordinates: string;

    clientContactName: string;
    clientContactPhoneNumber: string;
    clientContactEmail: string;
    venueContactName: string;
    venueContactPhoneNumber: string;
    venueContactEmail: string;

    setList: string[];
    specialRequests: string;
    firstDanceSong: string;
    fatherDaughterDanceSong: string;
    motherSonDanceSong: string;
    additionalDanceSongs: string;
    themeSongs: string;
    backgroundMusic: string;
    specialFocusAreas: string;
    rehearsalPerformanceNotes: string;

    arrivalTime: string;
    soundCheckTime: string;
    loadInInstructions: string;
    parkingInformation: string;

    stageSize: string;
    powerSupply: string;
    equipmentProvided: string;
    equipmentNeeded: string;
    soundSystem: string;

    fee: number;
    deposit: number;
    balanceDue: number;
    paymentMethod: string;
    paymentSchedule: string;

    ceremonyTime: string;
    cocktailHour: string;
    dinnerTime: string;
    speechesToasts: string;
    receptionTimeline: string;

    mealsProvided: string;
    breaks: string;
    greenRoom: string;

    emergencyContacts: string;
    venueEmergencyProcedures: string;

    notes: string;

    eventNameRecur: string;
    plansRecur: string;
};
