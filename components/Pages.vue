<template>
    <PagesTable :data="data" />
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

<script>
export default{
    data() {
        return {
            data: [
                {
                    category: 'Circuit',
                    data: [
                        {
                            category: 'Cables',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Basic cable" href="/" />',
                                    'Creative cable'
                                ]
                            }
                        },
                        {
                            category: 'Resistors',
                            data: '<span>Hello</span>'
                        },
                        {
                            category: 'Capacitors',
                            data: '<span>Hello</span>'
                        },
                        {
                            category: 'Inductors',
                            data: '<span>Hello</span>'
                        },
                        {
                            category: 'Switches',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Basic Switch" href="/blocks/basic_switch" img="block/basic_switch.png" />',
                                    '<PagesTableLink name="Basic Push Button" href="/blocks/basic_push_button" img="block/basic_push_button.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Diodes',
                            data: '<span>Hello</span>'
                        },
                        {
                            category: 'Misc',
                            data: '<span>Hello</span>'
                        }
                    ]
                },
                {
                    category: 'Microcontroller',
                    data: [
                        {
                            category: 'Ports',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Port Connector" href="/blocks/microcontroller_port_connector" img="block/muc_port_connector.png" />',
                                    '<PagesTableLink name="Microcontroller Port" href="/blocks/microcontroller_port" img="block/muc_port.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Controllers',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="M8051F020 Core" href="/blocks/microcontroller_port" img="block/muc_port.png" />',
                                ]
                            }
                        }
                    ]
                },
                {
                    category: 'Creative',
                    data:  {
                        type: 'links',
                        links: [
                            '<PagesTableLink name="Microcontroller Port Maker" href="/blocks/microcontroller_port_maker" img="block/muc_port_maker.png" />',
                            '<PagesTableLink name="Microcontroller Maker" href="/blocks/microcontroller_maker" img="block/muc_maker.png" />'
                        ]
                    }
                },
                {
                    category: 'Items',
                    data: [
                        {
                            category: 'Measurement',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Multimeter" href="/items/multimeter" img="item/ultimate_multimeter.png" />',
                                    '<PagesTableLink name="Thermometer" href="/items/thermometer" img="item/thermometer.png" />',
                                    '<PagesTableLink name="Product State Scanner" href="/items/product_state_scanner" img="item/product_scanner.png" />'
                                ]
                            }
                        }
                    ]
                },
                {
                    category: 'Development',
                    data: {
                        type: 'links',
                        links: [
                            '<PagesTableLink name="Virtual Circuits" href="/dev/virtual_circuits" />',
                            '<PagesTableLink name="Thermal Simulation" href="/dev/virtual_circuits" />'
                        ]
                    }
                }
            ]
        }
    }
}
</script>
