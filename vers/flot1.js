[
	{
		"id": "8d1d32d6.ef9a1",
		"type": "tcp in",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"server": "server",
		"host": "",
		"port": "",
		"datamode": "stream",
		"datatype": "buffer",
		"newline": "",
		"topic": "",
		"base64": false,
		"x": 340,
		"y": 280,
		"wires": [
			[]
		]
	},
	{
		"id": "2dae7795.e548b8",
		"type": "udp in",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"iface": "",
		"port": "",
		"ipv": "udp4",
		"multicast": "false",
		"group": "",
		"datatype": "buffer",
		"x": 380,
		"y": 480,
		"wires": [
			[]
		]
	},
	{
		"id": "5f1054f2.c2251c",
		"type": "join",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"mode": "custom",
		"build": "string",
		"property": "payload",
		"propertyType": "msg",
		"key": "topic",
		"joiner": "\\n",
		"joinerType": "str",
		"accumulate": false,
		"timeout": "",
		"count": "",
		"reduceRight": false,
		"reduceExp": "",
		"reduceInit": "",
		"reduceInitType": "",
		"reduceFixup": "",
		"x": 610,
		"y": 300,
		"wires": [
			[]
		]
	},
	{
		"id": "9f5a1663.a71e18",
		"type": "split",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"splt": "\\n",
		"spltType": "str",
		"arraySplt": 1,
		"arraySpltType": "len",
		"stream": false,
		"addname": "",
		"x": 600,
		"y": 420,
		"wires": [
			[]
		]
	},
	{
		"id": "6dcccd7e.af7224",
		"type": "saveflow",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"path": "C:\\Users\\ange.kamdem\\.node-red\\vers\\flot1.js",
		"enabled": true,
		"exporttype": "original",
		"x": 280,
		"y": 80,
		"wires": [
			[
				"16ac5cb6.ea3803"
			]
		]
	},
	{
		"id": "356482a2.077f2e",
		"type": "inject",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"topic": "",
		"payload": "",
		"payloadType": "date",
		"repeat": "",
		"crontab": "",
		"once": false,
		"onceDelay": 0.1,
		"x": 140,
		"y": 80,
		"wires": [
			[
				"6dcccd7e.af7224"
			]
		]
	},
	{
		"id": "d9104cb0.48da",
		"type": "exec",
		"z": "c6788aa7.c4dad8",
		"command": "git commit -m \"Valhalla\"",
		"addpay": true,
		"append": "",
		"useSpawn": "false",
		"timer": "",
		"oldrc": false,
		"name": "",
		"x": 750,
		"y": 80,
		"wires": [
			[
				"a68a0bf0.9924f8"
			],
			[],
			[
				"f8f00302.ac824"
			]
		]
	},
	{
		"id": "a68a0bf0.9924f8",
		"type": "exec",
		"z": "c6788aa7.c4dad8",
		"command": "git push -u origin develop",
		"addpay": true,
		"append": "",
		"useSpawn": "false",
		"timer": "",
		"oldrc": false,
		"name": "",
		"x": 1030,
		"y": 80,
		"wires": [
			[
				"f8f00302.ac824"
			],
			[],
			[
				"f8f00302.ac824"
			]
		]
	},
	{
		"id": "f8f00302.ac824",
		"type": "debug",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": false,
		"tostatus": false,
		"complete": "payload",
		"targetType": "msg",
		"x": 1210,
		"y": 220,
		"wires": []
	},
	{
		"id": "16ac5cb6.ea3803",
		"type": "exec",
		"z": "c6788aa7.c4dad8",
		"command": "git add vers/*",
		"addpay": true,
		"append": "",
		"useSpawn": "false",
		"timer": "",
		"oldrc": false,
		"name": "",
		"x": 430,
		"y": 80,
		"wires": [
			[
				"d9104cb0.48da",
				"4a28d44c.87492c"
			],
			[],
			[
				"f8f00302.ac824"
			]
		]
	},
	{
		"id": "4a28d44c.87492c",
		"type": "exec",
		"z": "c6788aa7.c4dad8",
		"command": "echo %cd%",
		"addpay": true,
		"append": "",
		"useSpawn": "false",
		"timer": "",
		"oldrc": false,
		"name": "",
		"x": 730,
		"y": 200,
		"wires": [
			[
				"f8f00302.ac824"
			],
			[],
			[]
		]
	}
]