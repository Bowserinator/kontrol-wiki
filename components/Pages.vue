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
                                    '<PagesTableLink name="Creative Cable" href="/blocks/creative_cable" img="block/creative_cable.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Resistors',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Creative Resistor" href="/blocks/creative_resistor" img="block/creative_resistor.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Capacitors',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Creative Capacitor" href="/blocks/creative_capacitor" img="block/creative_capacitor.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Inductors',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Creative Inductor" href="/blocks/creative_inductor" img="block/creative_inductor.png" />',
                                ]
                            }
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
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Basic LED" href="/blocks/basic_led" img="block/basic_led.png" />'
                                ]
                            }
                        },
                        {
                            category: 'Scopes',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Creative Scope" href="/blocks/creative_scope" img="block/creative_scope.png" />'
                                ]
                            }
                        },
                                                {
                            category: 'Misc',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="Ground Node" href="/blocks/ground_node" img="block/ground.png" />'
                                ]
                            }
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
                                    '<PagesTableLink name="BOG07 Redstone Port" href="/blocks/BOG07_muc_redstone_port" img="block/muc_redstone_port_1.png" />',
                                ]
                            }
                        },
                        {
                            category: 'Controllers',
                            data: {
                                type: 'links',
                                links: [
                                    '<PagesTableLink name="M8051F020 Core" href="/blocks/m8051f020_core" img="block/c8051_core.png" />',
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
