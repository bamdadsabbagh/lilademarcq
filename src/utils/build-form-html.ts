import {FormDataInterface} from '../pages/api/form';

export function buildFormHtml(form: FormDataInterface): string {
  return `
      <h3>Objet</h3>
      <p>${form.topic}</p>
      
      <h3>Abonnement newsletter</h3>
      <p>${form.subscribe ? 'Oui' : 'Non'}</p>

      <h3>Nom</h3>
      <p>${form.name}</p>

      <h3>Prénom</h3>
      <p>${form.firstName}</p>
      
      ${form?.address && (`
        <h3>Adresse</h3>
        <p>${form.address}</p>
      `)}
      
      ${form?.postcode && (`
        <h3>Code postal</h3>
        <p>${form.postcode}</p>
      `)}
      
      <h3>Ville</h3>
      <p>${form.city}</p>
      
      <h3>Email</h3>
      <p>${form.email}</p>
      
      ${form?.phone && (`
        <h3>Téléphone</h3>
        <p>${form.phone}</p>
      `)}
    `;
}
