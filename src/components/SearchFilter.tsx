import React from 'react'
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'
import { sizeMedia } from '../../styles/mediaQuerys'
import { primaryColor } from '../context/themeColors'
import { H2, Span } from './text'
import { Form, Formik, Field } from 'formik'
import { Button } from './buttons/Button'

const FormContainerdDiv = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  background: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 1.5rem 0;
  @media ${sizeMedia('xs_sm')} {
    background: none;
    padding: 0;
  }
  @media ${sizeMedia('md')} {
    /* width: 80%; */
  }
`

export const H2Styled = styled.h2<{
  fontSize?: string
  fontWeight?: string
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  color: white;
  display: block;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'bold')};
`

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${sizeMedia('xs_sm')} {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-around;
  }
`

export const SearchFilter = () => {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  const initialValues = {
    category: '',
    category2: '',
    search: '',
  }

  return (
    <div className="search-filter">
      <H2 marginResponsive="0" fontSize="2rem" fontWeight="bold" color="#fff">
        Descubre las pymes que trabajan con nosotros
      </H2>

      <Span color="#fff" margin="3rem 0" marginResponsive="1rem 0">
        Buscar por nombre o por categoría
      </Span>

      {/* <IconFilterList theme="dark" /> */}

      <FormContainerdDiv>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="form-inline">
            {/* <InputSearch type="text"> */}
            <div>
              {' '}
              <Field
                id="category"
                name="category"
                placeholder="¿Donde estas buscando?"
                className="input-search"
              />
              <Field
                id="category2"
                name="category2"
                placeholder="Todas las categorias"
                className="input-search"
              />
              <Field
                id="search"
                name="search"
                placeholder="¿Donde estas buscando?"
                className="input-search"
              />
            </div>

            {/* <IconFilterList /> */}

            <ContainerButtons>
              <Button textColor="black" background="white">
                Filtro
              </Button>

              <Button
                type="submit"
                background={primaryColor}
                icon={<IoSearch color="#fff" height="16px" width="16px" />}
              >
                Buscar
              </Button>
            </ContainerButtons>
          </Form>
        </Formik>
      </FormContainerdDiv>

      {/* <IconFilterList theme="dark" /> */}
    </div>
  )
}