class Entity
{
    constructor(Id){
        this.Id = Id;
    }
}

class BaseRestriction extends Entity
{
    constructor(Id, Identifier, QuoteId, Quote){
        super(Id);
        this.Identifier = Identifier;
        this.QuoteId = QuoteId;
        this.Quote = Quote;
    }
}

class RangedRestriction extends BaseRestriction
{
    constructor(Id, From, To){
        super(Id);
        this.From = From;
        this.To = To;
    }
}

class FixedRestriction extends BaseRestriction
{
    constructor(Id, Value){
        super(Id);
        this.Value = Value;
    }
}
class ListOfRestriction extends BaseRestriction
{
    constructor(Id, ListOfRestrictionEntries){
        super(Id);
        this.ListOfRestrictionEntries = ListOfRestrictionEntries;
    }
}

class ListOfRestrictionEntry extends Entity
{
    constructor(Id, Value, ListOfRestrictionId, ListOfRestriction){
        super(Id);
        this.Value = Value;
        this.ListOfRestrictionId = ListOfRestrictionId;
        this.ListOfRestriction = ListOfRestriction;
    }
}