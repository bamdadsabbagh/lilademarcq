/* eslint-disable react/jsx-props-no-spreading */
import React, {ReactElement, useCallback} from 'react';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {
  Container,
  Form,
  FormContainer,
  GoogleContainer,
  LabelAddress,
  LabelCity,
  LabelContact,
  LabelFirstName,
  LabelName,
  LabelPhone,
  LabelPostcode,
  LabelTopic,
  Select,
  Submit,
  SubscribeCheckbox,
  SubscribeContainer,
  SubscribeText,
  Title,
  TitleContainer,
} from './form.module.styles';
import {theme} from '../../app/styles/theme';
import {useFormModule} from './hooks/use-form-module';
import {InputComponent} from './components/input/input.component';
import {FormInterface} from '../../utils/fetch-form';
import {LinkComponent} from '../../components/link/link.component';
import {SectionComponent} from '../../components/section/section.component';

enum FormInputKeys {
  topic = 'topic',
  name = 'name',
  firstName = 'firstName',
  address = 'address',
  postcode = 'postcode',
  city = 'city',
  email = 'email',
  phone = 'phone',
}

interface FormModuleProps {
  form: FormInterface;
  text?: string;
  backgroundColor?: string;
}

const defaultProps = {
  text: 'Une question ? Ecrivez-moi',
  backgroundColor: theme.green,
};

export function FormModule({
  form,
  text = defaultProps.text,
  backgroundColor = defaultProps.backgroundColor,
}: FormModuleProps): ReactElement {
  const {
    wasSubmitted,
    submitText,
    isOpen,
    setIsOpen,
    isHover,
    setIsHover,
    isSubscribe,
    isSubscribeHover,
    toggleSubscribe,
    hoverSubscribe,
    handleSubmit,
  } = useFormModule(form);

  const cleanSlug = useCallback((s: string) => s.replace('*', ''), []);

  return (
    <SectionComponent backgroundColor={backgroundColor}>
      <Container>
        <TitleContainer
          onClick={() => setIsOpen((i) => !i)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Title>{text}</Title>
          <TriangleComponent
            isBottom={!isOpen}
            isTop={isOpen}
            isHover={isHover}
          />
        </TitleContainer>
        <FormContainer visible={isOpen}>
          <Form onSubmit={handleSubmit}>

            <LabelTopic htmlFor={cleanSlug(form.topicTitle)}>
              {form.topicTitle}
              <Select
                color={theme.white}
                backgroundColor={backgroundColor}
                name={FormInputKeys.topic}
                disabled={wasSubmitted}
                defaultValue=""
                required
              >
                <option value="" disabled />
                {form.topic.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </Select>
            </LabelTopic>

            <LabelName htmlFor={cleanSlug(form.name)}>
              {form.name}
              <InputComponent
                name={FormInputKeys.name}
                required
                disabled={wasSubmitted}
              />
            </LabelName>

            <LabelFirstName htmlFor={cleanSlug(form.firstName)}>
              {form.firstName}
              <InputComponent
                name={FormInputKeys.firstName}
                required
                disabled={wasSubmitted}
              />
            </LabelFirstName>

            <LabelAddress htmlFor={cleanSlug(form.address)}>
              {form.address}
              <InputComponent
                name={FormInputKeys.address}
                placeholder={form.road}
                isTextAndNumber
                disabled={wasSubmitted}
              />
            </LabelAddress>

            <LabelPostcode>
              <InputComponent
                name={FormInputKeys.postcode}
                placeholder={form.postcode}
                isPostcode
                disabled={wasSubmitted}
              />
            </LabelPostcode>

            <LabelCity>
              <InputComponent
                name={FormInputKeys.city}
                placeholder={form.city}
                required
                disabled={wasSubmitted}
              />
            </LabelCity>

            <LabelContact htmlFor={cleanSlug(form.contact)}>
              {form.contact}
              <InputComponent
                name={FormInputKeys.email}
                placeholder={form.email}
                required
                isEmail
                disabled={wasSubmitted}
              />
            </LabelContact>

            <LabelPhone>
              <InputComponent
                name={FormInputKeys.phone}
                placeholder={form.phone}
                isPhone
                disabled={wasSubmitted}
              />
            </LabelPhone>

            <SubscribeContainer>
              <SubscribeCheckbox
                backgroundColor={backgroundColor}
                hover={isSubscribeHover}
                onMouseEnter={() => !wasSubmitted && hoverSubscribe(true)}
                onMouseLeave={() => hoverSubscribe(false)}
              >
                <input
                  type="checkbox"
                  checked={isSubscribe}
                  onClick={() => toggleSubscribe()}
                  readOnly
                  disabled={wasSubmitted}
                />
                <span />
              </SubscribeCheckbox>
              <SubscribeText
                onClick={() => !wasSubmitted && toggleSubscribe()}
                onMouseEnter={() => !wasSubmitted && hoverSubscribe(true)}
                onMouseLeave={() => hoverSubscribe(false)}
                disabled={wasSubmitted}
              >{
                form.subscription
              }</SubscribeText>
            </SubscribeContainer>

            <Submit
              backgroundColor={backgroundColor}
              type="submit"
              disabled={wasSubmitted}
            >
              {submitText}
            </Submit>

            <GoogleContainer>
              This site is protected by reCAPTCHA and the
              Google&nbsp;
              <LinkComponent href="https://policies.google.com/privacy">Privacy
                Policy
              </LinkComponent>
              &nbsp;and&nbsp;
              <LinkComponent href="https://policies.google.com/terms">Terms of
                Service
              </LinkComponent>
              &nbsp;apply.
            </GoogleContainer>
          </Form>
        </FormContainer>
      </Container>
    </SectionComponent>
  );
}
