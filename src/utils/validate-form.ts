import {FormDataInterface} from '../pages/api/form';
import {fetchForm} from './fetch-form';

export const FormRegex = {
  string: '^[A-Za-zÀ-Ÿ\' .-]+$',
  textAndNumbers: '^[A-Za-zÀ-Ÿ0-9\' .-]+$',
  postcode: '^[A-Z0-9]{2,5}$',
  phone: '^[0-9]+$',
  email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
};

export async function validateForm(data: FormDataInterface): Promise<boolean> {
  const form = await fetchForm();

  // validate topic
  if (!(
    typeof data.topic === 'string'
    && form.topic.includes(data.topic)
  )) {
    return false;
  }

  // validate name
  if (!(
    typeof data.name === 'string'
    && new RegExp(FormRegex.string).test(data.name)
  )) {
    return false;
  }

  // validate firstName
  if (!(
    typeof data.firstName === 'string'
    && new RegExp(FormRegex.string).test(data.firstName)
  )) {
    return false;
  }

  // validate optional address
  if (data?.address) {
    if (!(
      typeof data.address === 'string'
      && new RegExp(FormRegex.textAndNumbers).test(data.address)
    )) {
      return false;
    }
  }

  // validate optional post code
  if (data?.postcode) {
    if (!(
      typeof data.postcode === 'string'
      && new RegExp(FormRegex.postcode).test(data.postcode)
    )) {
      return false;
    }
  }

  // validate optional city
  if (data?.city) {
    if (!(
      typeof data.city === 'string'
      && new RegExp(FormRegex.string).test(data.city)
    )) {
      return false;
    }
  }

  // validate email
  if (!(
    typeof data.email === 'string'
    && new RegExp(FormRegex.email).test(data.email)
  )) {
    return false;
  }

  // validate optional phone
  if (data?.phone) {
    if (!(
      typeof data.phone === 'string'
      && new RegExp(FormRegex.phone).test(data.phone)
    )) {
      return false;
    }
  }

  // validate subscription
  if (!(
    typeof data.subscribe === 'boolean'
  )) {
    return false;
  }

  return true;
}
