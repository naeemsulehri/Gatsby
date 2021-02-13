class Calculator{
    constructor(Amount, Quantity){
        this.Amount = Amount;
        this.Quantity = Quantity;
    }
    get Total() {
        return this.Amount * this.Quantity;
    }
}

class Coordinates{
    constructor(Longitude, Latitude){
        this.Longitude = Longitude;
        this.Latitude = Latitude;
    }
}

class UnitValue{
    constructor(Value , Identifier){
        this.Value = Value;
        this.Identifier = Identifier;
    }
}

class Location{
    constructor(Coordinates, ZipCode, Street, StreetNumber, City, Country, StateOrProvince){
        this.Coordinates = Coordinates;
        this.ZipCode = ZipCode;
        this.Street = Street;
        this.StreetNumber = StreetNumber;
        this.City = City;
        this.Country = Country;
        this.StateOrProvince = StateOrProvince;
    }
}

class RoutePoints extends Entity{
    constructor(Id, Location, specialCharges){
        super(Id);
        this.Location = Location;
        this.specialCharges = specialCharges;
    }
}