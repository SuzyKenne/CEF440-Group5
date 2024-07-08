const AccesControl = require('accescontrol');
const ac = new AccesControl();

exports.role = (function() {
    ac.grant('student')
      .readOwn('profile')
      .uptdateOwn('profile');

    ac.grant('instructor')
      .extend('student')
      .readAny('profile')
      .uptdateAny('profile');

    ac.grant('admin')
      .extend('student')
      .extend('instructor')
      .uptdateAny('profile')
      .deleteAny('profile')

    return ac;
})();