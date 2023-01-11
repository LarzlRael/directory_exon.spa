import { InformationPlacesI } from '../components/InformationPlaces'
import { IoPerson, IoHammer } from 'react-icons/io5'
import { MdFileUpload } from 'react-icons/md'

export const informationPlacesData: InformationPlacesI[] = [
  {
    icon: 'fab fa-accusoft',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },

  {
    icon: 'fab fa-affiliatetheme',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
  {
    icon: 'fab fa-apple',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },

  {
    icon: 'fas fa-allergies',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },
  {
    icon: 'fab fa-accusoft',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
  {
    icon: 'fas fa-search',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },
  {
    icon: 'fas fa-allergies',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },
  {
    icon: 'fas fa-search',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },
  {
    icon: 'fas fa-allergies',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
]

export const departamentos = [
  'La Paz',
  'Cochabamba',
  'Santa Cruz',
  'Oruro',
  'Potosi',
  'Tarija',
  'Chuquisaca',
  'Beni',
  'Pando',
]
export const links = [
  {
    href: '/',
    labelLink: 'Inicio',
  },
  {
    href: '/test2',
    labelLink: 'Listado',
  },
  {
    href: '/test3',
    labelLink: 'Categorias',
  },
  {
    href: '/auth/login',
    labelLink: 'Mi Cuenta',
  },
]

interface AccountsLinkInterface {
  title_group: string
  items: ItemInterface[]
}
interface ItemInterface {
  title: string
  to: string
  icon: any
}
export const accountsLink: AccountsLinkInterface[] = [
  {
    title_group: 'Usuario',
    items: [
      {
        title: 'Mi cuenta',
        to: '/admin/profile',
        icon: <IoPerson size={25} />,
      },
    ],
  },
  {
    title_group: 'Pymes',
    items: [
      {
        title: 'Adminstrar Pymes',
        to: '/dashboard/actualizar',
        icon: <MdFileUpload size={25} />,
      },
    ],
  },
]
