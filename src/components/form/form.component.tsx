/* eslint-disable react/jsx-props-no-spreading */
import React, {ReactElement, useCallback, useState} from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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

          <Label
            htmlFor="objet"
            row={1}
            column={[1, 4]}
          >
            <span>Objet*</span>
            <Select defaultValue="">
              <option value="value">Label</option>
            </Select>
          </Label>

          <Label htmlFor="nom" row={2} column={1} isColumn>
            <span>Nom*</span>
            <Input type="text" />
          </Label>

          <Label htmlFor="prenom" row={2} column={2} isColumn>
            <span>Prenom*</span>
            <Input type="text" />
          </Label>

          <Label
            htmlFor="adresse"
            row={2}
            column={3}
            isColumn
          >
            <span>Adresse</span>
            <Input
              type="text"
              placeholder="Voie"
            />
          </Label>

          <Label
            row={3}
            column={3}
            isColumn
          >
            <Input
              placeholder="Code postal"
              type="text"
            />
          </Label>

          <Label
            htmlFor="contact"
            row={4}
            column={1}
            isColumn
          >
            <span>Contact</span>
            <Input
              placeholder="E-mail*"
              type="text"
            />
          </Label>

          <Label
            row={4}
            column={2}
            isColumn
          >
            <Input
              placeholder="Téléphone"
              type="text"
            />
          </Label>

          <Label
            row={4}
            column={3}
            isColumn
          >
            <Input
              placeholder="Ville*"
              type="text"
            />
          </Label>

          <Subscribe>
            <SubscribeCheckbox backgroundColor={backgroundColor}>
              <input type="checkbox" />
              <span />
            </SubscribeCheckbox>
            <SubscribeText>
              Cocher la case si vous acceptez de recevoir ma newsletter et des
              promotions
            </SubscribeText>
          </Subscribe>

          <Submit
            backgroundColor={backgroundColor}
            type="submit"
          >
            Envoyer
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  );
}
