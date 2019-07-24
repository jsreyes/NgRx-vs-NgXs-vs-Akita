import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetName, ResetName } from '../actions/name.actions';

export class NameStateModel {
    name: string;
}

@State<NameStateModel>({
    name: 'name',
    defaults: {
        name: ''
    }
})
export class NameState {

    @Selector()
    static getUsers(state: NameStateModel) {
        return state.name;
    }

    @Action(SetName)
    SetName({getState, patchState }: StateContext<NameStateModel>, { payload }: SetName) {
        const state = getState();
        patchState({
            name: payload
        });
    }

    @Action(ResetName)
    ResetName({patchState }: StateContext<NameStateModel>) {
        patchState({
            name: ''
        });
    }
}
