import * as APIUtil from '../util/image_api_util';

export const createImage = image => dispatch => (
    APIUtil.createImage(image)
);