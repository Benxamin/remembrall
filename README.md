# Remembrall
"Remembrall" is the project code name of this application that helps planning
and analysis by managing your recurrences.

## Dependencies
**[NodeJS v4.2.2](https://nodejs.org/)** and **npm**.

**Npm** is installed with NodeJS. It does not require a separate installation.
It's possible to 
[update npm](https://docs.npmjs.com/getting-started/installing-node) 
separately, if you need to.

## Installation
`git clone git@github.com:Benxamin/remembrall.git`

`cd remembrall`

`npm install`

## Tests

## Running

## Example Usage

## Contact

## Documentation
API in Nodejs by Hapi.js

## Schema in PostgreSQL
I went through and created a data model for an application called "Tickler". This is based on old-school journalists tickler file.

### Table: Logs
`log_id:serial, user_id:int, created:timestamp, fact:varchar(64), detail:varchar(128), recurrence_id:int, alarm_id:int, updated:timestamp`

### Table: Recurrences
`recurrence_id:serial, recurrence_type:varchar(64), user_id:int`

### Table: Alarms
`alarm_id:serial, alarm_type:varchar(64), user_id:int`

### Table: Users
`user_id:serial, first_name:varchar(32), last_name:varchar(32), email:varchar(128), phone:varchar(32), device_id:int, plan_id:int`

### Table: Devices
`device_id:serial, device_name:varchar(32), device_detail:varchar(128)`

### Table: Plans
`plan_id:serial, plan_type:varchar(128)`

## License
Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported 
([CC BY-NC-ND 3.0](http://creativecommons.org/licenses/by-nc-nd/3.0/))

### You are free to:
**Share** — copy and redistribute the material in any medium or format
The licensor cannot revoke these freedoms as long as you follow the 
license terms.

### Under the following terms:
**Attribution** — You must give _appropriate credit_, provide a link to the 
license, and _indicate if changes were made_. You may do so in any reasonable 
manner, but not in any way that suggests the licensor endorses you or your use.

**NonCommercial** — You may not use the material for _commercial purposes_.

**NoDerivatives** — If you _remix_, _transform_, or _build upon_ the material, 
you may not distribute the modified material.

**No additional restrictions** — You may not apply legal terms or technological 
measures that legally restrict others from doing anything the license permits.

### Notices:
You do not have to comply with the license for elements of the material in the 
_public domain_ or where your use is permitted by an _applicable exception_ 
or _limitation_.

**No warranties** are given. The license may not give you all of the 
permissions necessary for your intended use. For example, other rights such as 
_publicity_, _privacy_, or _moral rights_ may limit how you use the material.
