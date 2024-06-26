import {
  RECEIVE_EXPORT,
  RECEIVE_EXPORTS,
  REQUEST_EXPORTS,
} from 'actions/constants';
import { Export } from 'model/Export';
import { AnyAction } from 'redux';

export type ExportsState = Export[] | null;

const exportsReducer = (exports: ExportsState = null, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_EXPORTS:
      return null;

    case RECEIVE_EXPORTS:
      return action.exports.sort((a: Export, b: Export) => {
        const aDate = new Date(a.created!);
        const bDate = new Date(b.created!);
        return bDate.getTime() - aDate.getTime();
      });

    case RECEIVE_EXPORT:
      return exports
        ? exports.map((e) => (e.id === action.export.id ? action.export : e))
        : [action.export];

    default:
      return exports;
  }
};

export default exportsReducer;
