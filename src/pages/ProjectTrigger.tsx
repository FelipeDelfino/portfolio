import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    IconButton,
  } from '@chakra-ui/react'
  import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Info() {
    const initialFocusRef = React.useRef()
    return (
      <Popover
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
          bg='gray.900'
          size='sm'
          borderRadius='full'
          aria-label='Information'
          icon={<AiOutlineInfoCircle size='20'/>}
          />
        </PopoverTrigger>
        <PopoverContent color='white' bg='gray.700' borderColor='gray.800'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Clique e arraste para o lado.
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Para visualizar todos os projetos disponíveis, sobre os quadrados clique e arraste para o lado
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }