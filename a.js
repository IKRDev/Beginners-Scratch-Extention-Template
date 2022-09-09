class MyExtention {
  constructor() {
  }

  getInfo() {
    return {
      "id": "MyExtention", // Machine-Readable name of the extention, will be used as the namespace

      // Extention color overrides
      "color1": '#FF8C1A',
      "color2": '#DB6E00',

      // Human-readable name: OPTIONAL
      "name": formatMessage({
        "id": 'MyExtention',
        "defaultMessage": 'My Extention',
        "description": 'Description'
      }),

      //List of the blocks in order of appearence
      "blocks": [
        {
          "opcode": "myReporter",// Name of block, and function it will use
          "blocktype": "reporter", // type of block
          "text": "report [arg]", // Text of blocks (square brackets are arguments)
          // Block arguments
          "arguments": {
            "arg": { // name
              "type": "string", // type of argument
              "defaultvalue": "string arg" // default value of argument
            }
          }
        }
      ]
      
    }
  }

  myReporter({arg}) {
    return arg
  }
}

Scratch.extensions.register(new MyExtention())
