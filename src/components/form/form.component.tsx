/* eslint-disable react/jsx-props-no-spreading */
import React, {ReactElement, useCallback} from 'react';
import {TriangleComponent} from '../triangle/triangle.component';
import {
  Container,
  Form,
  FormContainer,
  Input,
  Label,
  Select,
  Submit,
  Subscribe,
  SubscribeCheckbox,
  SubscribeText,
  Title,
} from './form.styles';
import {theme} from '../../app/styles/theme';
import {useFormComponent} from './hooks/use-form-component';

interface FormComponentProps {
  text?: string;
  backgroundColor?: string;
}

const defaultProps = {
  text: 'Une question ? Ecrivez-moi',
  backgroundColor: theme.green,
};

export function FormComponent({
  text = defaultProps.text,
  backgroundColor = defaultProps.backgroundColor,
}: FormComponentProps): ReactElement {
  const {
    form,
    isOpen,
    setIsOpen,
    isHover,
    setIsHover,
    isSubscribe,
    isSubscribeHover,
    toggleSubscribe,
    hoverSubscribe,
    handleSubmit,
  } = useFormComponent();

  const cleanSlug = useCallback((s: string) => s.replace('*', ''), []);

  return (
    <Container>
      <Title
        onClick={() => setIsOpen((i) => !i)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {text} <TriangleComponent
          isBottom={!isOpen}
          isTop={isOpen}
          isHover={isHover}
        />
      </Title>
      <FormContainer visible={isOpen}>
        <Form onSubmit={handleSubmit}>

          <Label htmlFor={cleanSlug(form.topicTitle)} row={1} column={[1, 4]}>
            <span>{form.topicTitle}</span>
            <Select>
              {form.topic.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </Select>
          </Label>

          <Label htmlFor={cleanSlug(form.name)} row={2} column={1} isColumn>
            <span>{form.name}</span>
            <Input type="text" />
          </Label>

          <Label
            htmlFor={cleanSlug(form.firstName)}
            row={2}
            column={2}
            isColumn
          >
            <span>{form.firstName}</span>
            <Input
              type="text"
            />
          </Label>

          <Label
            htmlFor={cleanSlug(form.address)}
            row={2}
            column={3}
            isColumn
          >
            <span>{form.address}</span>
            <Input
              type="text"
              placeholder={form.road}
            />
          </Label>

          <Label
            row={3}
            column={3}
            isColumn
          >
            <Input
              placeholder={form.postcode}
              type="text"
            />
          </Label>

          <Label
            row={4}
            column={3}
            isColumn
          >
            <Input
              placeholder={form.city}
              type="text"
            />
          </Label>

          <Label
            htmlFor={cleanSlug(form.contact)}
            row={4}
            column={1}
            isColumn
          >
            <span>{form.contact}</span>
            <Input
              placeholder={form.email}
              type="text"
            />
          </Label>

          <Label
            row={4}
            column={2}
            isColumn
          >
            <Input
              placeholder={form.phone}
              type="text"
            />
          </Label>

          <Subscribe>
            <SubscribeCheckbox
              backgroundColor={backgroundColor}
              hover={isSubscribeHover}
              onMouseEnter={() => hoverSubscribe(true)}
              onMouseLeave={() => hoverSubscribe(false)}
            >
              <input
                type="checkbox"
                checked={isSubscribe}
                onClick={() => toggleSubscribe()}
                readOnly
              />
              <span />
            </SubscribeCheckbox>
            <SubscribeText
              onClick={() => toggleSubscribe()}
              onMouseEnter={() => hoverSubscribe(true)}
              onMouseLeave={() => hoverSubscribe(false)}
            >{
              form.subscription
            }</SubscribeText>
          </Subscribe>

          <Submit
            backgroundColor={backgroundColor}
            type="submit"
          >
            {form.submit}
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  );
}
