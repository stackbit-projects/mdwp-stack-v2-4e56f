type: object
name: Button
label: Button
labelField: label
fieldGroups:
  - name: styles
    label: Styles
  - name: settings
    label: Settings
fields:
  - type: string
    name: label
    label: Label
    default: Learn more
  - type: string
    name: altText
    label: Alt text
    default: Learn more
    description: The alternative text for screen readers
  - type: string
    name: url
    label: URL
    default: '/'
  - type: boolean
    name: showIcon
    group: styles
    label: Show icon
    default: false
  - type: enum
    name: icon
    group: styles
    label: Icon
    options:
      - arrowRight
      - arrowLeft
      - cart
      - facebook
      - github
      - instagram
      - linkedin
      - twitter
    default: arrowRight
  - type: enum
    name: iconPosition
    group: styles
    controlType: button-group
    label: Icon position
    options:
      - left
      - right
    default: right
  - type: enum
    name: style
    group: styles
    controlType: button-group
    label: Style
    options:
      - label: Primary
        value: primary
      - label: Secondary
        value: secondary
    default: secondary
  - type: string
    name: elementId
    group: settings
    label: Element ID
    description: The unique ID for an HTML element, must not contain whitespace
    default: ''
