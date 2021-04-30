{}
-=-|CONFIG_ABOVE|-=-


# Microcontroller Networks

TODO spell check

Microcontroller networks are how microcontrollers communicate with its ports. A network is formed from a collection of [Microcontroller Ports](/blocks/microcontroller_port) and a Microcontroller Core.

## Formation

The network is first formed when the microcontroller core is placed. New ports placed after won't be added to the network, and ports that are removed will be permeantly inaccessible. If multiple ports share the same ID 
only the latest port will count for that ID. [Microcontroller Port Connectors](/blocks/microcontroller_port_connector) can be used as filler for the floodfill, substituting a port block. The port connector doesn't do anything by itself.

The floodfill will only floodfill ports that are not set to OUT / IN state (unused ports).

## Destruction

The network is destroyed when the microcontroller core is removed. It is the core's responsibility to ensure that all ports are reset to a default state after it is removed; not doing so should be considered a bug.

## Technical