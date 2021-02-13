class Request extends Entity
{
    constructor(ClientId, Load, ValidTill, Brokerage, Type, Status, KnownShipper = false, ForeignImportRecord = false)
    {
        super(ClientId);
        this.ValidTill = validTill;
        this.Load = Load;
        this.Brokerage = Brokerage;
        this.Type = Type;
        this.KnownShipper = KnownShipper;
        this.ForeignImportRecord = ForeignImportRecord;
        this.Status = Status;
    }
}

class RequestType
{
    constructor(Keywords)
    {
        this.Keywords = Keywords;
    }
}

class RequestTarget
{
    constructor(ClientUid){
        this.ClientUid = ClientUid;
    }
}

const RequestStatus = {
        Draft = 0,
        Active = 1,
        Expired = 2,
        Canceled = 3,
        Confirmed = 4
    }

const RequestBrokerage = {
    // by source
    Primary = 1,
    // by us
    Secondary = 2,
    // by platform
    Teritary = 3
}

class LoadService extends Entity
{
    constructor(IncludeCharges, ChargeValue, Identifier)
    {
        this.IncludeCharges = IncludeCharges;
        this.ChargeValue = ChargeValue;
        this.Identifier = Identifier;
    }
}

class LoadItem extends AbstractLoad
{
    constructor(LoadValue, Quantity, LoadType, Description, Dimensions, HandlingInstructions = null)
    {
        super(LoadType, Description, Dimensions, HandlingInstructions);
        this.Quantity = Quantity;
        this.LoadValue = LoadValue;
    }
}

class Load extends AbstractLoad{
    constructor(IsHazardarous, PersonalEffects, LoadServices, LoadItems, SpecifiesTotals, Origin, Destination, LoadType, Description, Dimensions, HandlingInstructions = null, PickupAt = null, DeliverAt = null)
    {
        super(LoadType, Description, Dimensions, HandlingInstructions);
        this.IsHazardarous = IsHazardarous;
        this.PersonalEffects = PersonalEffects;
        this.LoadServices = LoadServices;
        this.LoadItems = LoadItems;
        this.SpecifiesTotals = SpecifiesTotals;
        this.Origin = Origin;
        this.Destination = Destination;
        this.PickupAt = PickupAt;
        this.DeliverAt = DeliverAt;
    }
}

class Dimensions
{
    constructor(Width, Length, Height, Weight)
    {
        this.Width = Width;
        this.Length = Length;
        this.Height = Height;
        this.Weight = Weight;
    }
}

class AbstractLoad extends Entity
{
    constructor(LoadType, Description, Dimensions, HandlingInstructions)
    {
        this.LoadType = LoadType;
        this.Description = Description;
        this.Dimensions = Dimensions;
        this.HandlingInstructions = HandlingInstructions;
    }
}