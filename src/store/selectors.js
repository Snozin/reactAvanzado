export const getLoginState = state => state.userAuth

export const getAdverts = state => state.adverts.data
export const getAdvertTags = state => state.adverts.tags
export const getSingleAdvert = state => state.adverts.getById

export const getUIState = state => state.ui