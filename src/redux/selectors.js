export function getContacts(state) {
   return state.contacts;
}

export function getIsLoading(state) {
   return state.tasks.isLoading;
}

export function getError(state) {
   return state.tasks.error;
}

export function getStatusFilter(state) {
   return state.filters.status;
}
