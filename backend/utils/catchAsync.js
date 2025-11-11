/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 11/10/2024 - 14:31:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/10/2024
    * - Author          : 
    * - Modification    : 
**/
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
