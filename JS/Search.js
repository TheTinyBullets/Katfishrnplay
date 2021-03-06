'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  Firebase = require('firebase'),
  person = require('./PersonDB');

/*========================================================||
||   Locally required sources                             ||
||========================================================*/

var styles = require('./styles'),
  SearchNav = require('./SearchNav');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
    NavigatorIOS,
    Component
   } = React;


/*========================================================||
||   Adds the Search view on top of Katfish               ||
||========================================================*/

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.searchContainer}
                initialRoute={{
            title: person.name,
            component: SearchNav
            }}/>
        );
    }
}

module.exports = Search;