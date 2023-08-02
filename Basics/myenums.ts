enum SeatChoice{
    AISLE = "aisle", // you can do set default number,string
    MIDDLE = "middle",
    WINDOW = "window",
    EMERGENCY = 0 // added later 
}

const kcSeat = SeatChoice.EMERGENCY

// if you add start of the enum, it will generate what is necesseary