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
                            data: '<span>Hello</span>'
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
                    category: 'Creative',
                    data: '<p>lol</p>'
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
                    data: '<p>lol</p>'
                }
            ]
        }
    }
}
</script>
