/* -------------------------------------------------------------------------- */
/* Copyright 2002-2017, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

define(function(require) {
    var Locale = require('utils/locale');
    var OpenNebulaUser = require('opennebula/user');
    var Sunstone = require('sunstone');
    var TAB_ID = require('./billing-tab/tabId');
    var _actions = require('./users-tab/actions');
    var TemplateBilling = require('hbs!./billing-tab/html');

   // var Buttons = require('./billing-tab/buttons');

    _actions["Billing.refresh"] = {
      type: "custom",
      call: _onShow
    };

    // var _dialogs = [
    //   require('tabs/users-tab/dialogs/password'),
    //   require('./users-tab/dialogs/login-token')
    // ];


    // var _formPanels = [
    //   require('./acls-tab/form-panels/create')
    // ];

    var Tab = {
      tabId: TAB_ID,
      title: Locale.tr("Billing"),
      listHeader: Locale.tr("Billing"),
      resource: 'Billing',
      actions: _actions,
      // buttons: Buttons,
      content: _html()
    };



    return Tab;

    function _html() {
      return TemplateBilling;
    }

    function _onShow() {

    }

  });
