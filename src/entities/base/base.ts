interface IBase {
  id?: string;
  lastUpdate?: Date;
}

export class Base implements IBase {
  id: string;
  lastUpdate?: Date;
}