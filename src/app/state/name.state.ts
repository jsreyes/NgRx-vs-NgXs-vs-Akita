import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetName, ResetName } from '../actions/name.actions';

export class NameStateModel {
    names: string[];
}

@State<NameStateModel>({
    name: 'names',
    defaults: {
        names: []
    }
})
export class NameState {

    @Selector()
    static getUsers(state: NameStateModel) {
        return state.names;
    }

    @Action(SetName)
    SetName({getState, patchState }: StateContext<NameStateModel>, { payload }: SetName) {
        const state = getState();
        patchState({
            names: [...state.names, payload]
        });
    }

    @Action(ResetName)
    ResetName({patchState }: StateContext<NameStateModel>) {
        patchState({
            names: []
        });
    }
}
