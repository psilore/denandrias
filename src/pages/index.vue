<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4">
        Denandrias
      </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <DenandriasLogo />
        </CBox>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CFlex,
  CHeading
} from '@chakra-ui/vue'

import DenandriasLogo from '../components/DenandriasLogo'

export default {
  name: 'App',
  components: {
    CBox,
    CFlex,
    CHeading,
    DenandriasLogo
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
  }
}
</script>
