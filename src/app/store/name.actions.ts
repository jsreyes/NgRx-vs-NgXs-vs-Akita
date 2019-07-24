import { Action } from '@ngrx/store';

export const SET_NAME = '[NAME] Set Name';
export const GET_NAME = '[NAME] Get Name';
export const RESET_NAME = '[NAME] Reset Name';

export class SetName implements Action {
  public readonly type = SET_NAME;

  constructor(public name: string) { }
}

export class GetName implements Action {
  public readonly type = GET_NAME;

  constructor() {}
}

export class ResetName implements Action {
  public readonly type = RESET_NAME;
}

export type nameActions =
  SetName |
  GetName |
  ResetName;