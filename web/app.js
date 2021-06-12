var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var blog = require('./routes/blog');
var error = require('./routes/error');
var RecipeAll = require('./routes/RecipeAll');
var Familydish = require('./routes/Familydish');
var Fruit = require('./routes/Fruit');
var Grainroots = require('./routes/Grainroots');
var IngredientsAll = require('./routes/IngredientsAll');
var Lightmeal = require('./routes/Lightmeal');
var Meatandeggs = require('./routes/Meatandeggs');
var Memberlogin = require('./routes/Memberlogin');
var employeeLogin = require('./routes/employeeLogin');
var employeeLogin2 = require('./routes/employeeLogin2');
var Memberloginfail = require('./routes/Memberloginfail');
var employeeLoginfail = require('./routes/MemberLoginfail');
var MemberRegister = require('./routes/MemberRegister');
var userlogin = require('./routes/userlogin');
var userLogout = require('./routes/userLogout');
var employeeLogout = require('./routes/employeeLogout');
var Memberindex = require('./routes/Memberindex');
var employeeindex = require('./routes/employeeindex');
var menuOne = require('./routes/menuOne');
var Mgmeal = require('./routes/Mgmeal');
var inOne = require('./routes/inOne');
var Snack = require('./routes/Snack');
var Vegetable = require('./routes/Vegetable');
var newmemberAdd = require('./routes/newmemberAdd');

var memberAdd = require('./routes/memberAdd');
var newmemberAddfail = require('./routes/newmemberAddfail');

var memberUpdate = require('./routes/memberUpdate');
var memberUpdateform = require('./routes/memberUpdateform');

var memberUpdateSuccess = require('./routes/memberUpdateSuccess');
var memberUpdateFail = require('./routes/memberUpdateFail');



var MmenuOne = require('./routes/MmenuOne');
var MinOne = require('./routes/MinOne');
var MRecipeAll = require('./routes/MRecipeAll');
var MLightmeal = require('./routes/MLightmeal');
var MMgmeal = require('./routes/MMgmeal');
var MFamilydish = require('./routes/MFamilydish');
var MSnack = require('./routes/MSnack');
var MIngredientsAll = require('./routes/MIngredientsAll');
var MGrainroots = require('./routes/MGrainroots');
var MMeatandeggs = require('./routes/MMeatandeggs');
var MVegetable = require('./routes/MVegetable');
var MFruit = require('./routes/MFruit');

var bOne = require('./routes/bOne');

var forumOne = require('./routes/forumOne');

var ERecipeAll = require('./routes/ERecipeAll');
var EmenuOne = require('./routes/EmenuOne');
var EmenuD = require('./routes/EmenuD');
var AddRecipe = require('./routes/AddRecipe');
var AddMenu = require('./routes/AddMenu');
var AddSuccess = require('./routes/AddSuccess');
var AddFail = require('./routes/AddFail');
var AddRecipe2 = require('./routes/AddRecipe2');
var AddMenu2 = require('./routes/AddMenu2');
var AddSuccess2 = require('./routes/AddSuccess2');
var AddSuccess3 = require('./routes/AddSuccess3');
var AddRecipe3 = require('./routes/AddRecipe3');
var AddMenu3 = require('./routes/AddMenu3');

var EIngredientsAll = require('./routes/EIngredientsAll');
var EinOne = require('./routes/EinOne');
var EingredientsD = require('./routes/EingredientsD');
var AddIngredients = require('./routes/AddIngredients');
var AddFood = require('./routes/AddFood');
var ingredientsUpdateform = require('./routes/ingredientsUpdateform');
var ingredientsUpdate = require('./routes/ingredientsUpdate');
var ingredientsupdateSuccess = require('./routes/ingredientsupdateSuccess');
var ingredientsupdateFail = require('./routes/ingredientsupdateFail');

var Mblog = require('./routes/Mblog');
var MbOne = require('./routes/MbOne');
var MforumOne = require('./routes/MforumOne');
var Eblog = require('./routes/Eblog');
var EbOne = require('./routes/EbOne');
var EblogD = require('./routes/EblogD');
var EforumOne = require('./routes/EforumOne');
var Addforumform = require('./routes/Addforumform');
var Addforum = require('./routes/Addforum');
var MaddFail = require('./routes/MaddFail');
var MaddSuccess = require('./routes/MaddSuccess');
var Myforum = require('./routes/Myforum');
var MforumD = require('./routes/MforumD');
var MremoveSuccess = require('./routes/MremoveSuccess');
var MremoveFail = require('./routes/MremoveFail');
var AddComment = require('./routes/AddComment');
var EcommentD = require('./routes/EcommentD');
var McommentD = require('./routes/McommentD');
var EAddforumform = require('./routes/EAddforumform');
var EAddforum = require('./routes/EAddforum');
var Eblog2 = require('./routes/Eblog2');
var Mblog2 = require('./routes/Mblog2');
var blog2 = require('./routes/blog2');
var Eblog2One = require('./routes/Eblog2One');
var Eblog2OneD = require('./routes/Eblog2OneD');
var Mblog2One = require('./routes/Mblog2One');
var blog2One = require('./routes/blog2One');
var addCart = require('./routes/addCart');
var Cart = require('./routes/Cart');
var cartD = require('./routes/cartD');
var order = require('./routes/order');
var forumUpdate = require('./routes/forumUpdate');
var forumUpdateform = require('./routes/forumUpdateform');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var session = require('express-session');
app.use(session({secret: '8787878787', cookie: { maxAge: 6000000 }}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/error', error);
app.use('/blog',blog);
app.use('/RecipeAll', RecipeAll);
app.use('/Familydish', Familydish);
app.use('/Fruit', Fruit);
app.use('/Grainroots', Grainroots);
app.use('/IngredientsAll', IngredientsAll);
app.use('/Lightmeal', Lightmeal);
app.use('/Meatandeggs', Meatandeggs);
app.use('/Memberlogin', Memberlogin);
app.use('/employeeLogin', employeeLogin);
app.use('/employeeLogin2', employeeLogin2);
app.use('/Memberloginfail', Memberloginfail);
app.use('/employeeLoginfail', employeeLoginfail);
app.use('/MemberRegister', MemberRegister);
app.use('/userlogin', userlogin);
app.use('/userLogout', userLogout);
app.use('/employeeLogout', employeeLogout);
app.use('/Memberindex', Memberindex);
app.use('/employeeindex', employeeindex);
app.use('/menuOne', menuOne);
app.use('/Mgmeal', Mgmeal);
app.use('/inOne', inOne);
app.use('/Snack', Snack);
app.use('/Vegetable', Vegetable);

app.use('/newmemberAdd', newmemberAdd);
app.use('/memberAdd', memberAdd);
app.use('/newmemberAddfail', newmemberAddfail);

app.use('/memberUpdate', memberUpdate);
app.use('/memberUpdateform', memberUpdateform);
app.use('/memberUpdateSuccess', memberUpdateSuccess);
app.use('/memberUpdateFail', memberUpdateFail);




app.use('/MmenuOne', MmenuOne);
app.use('/MinOne', MinOne);
app.use('/MRecipeAll', MRecipeAll);
app.use('/MLightmeal', MLightmeal);
app.use('/MMgmeal', MMgmeal);
app.use('/MFamilydish', MFamilydish);
app.use('/MSnack', MSnack);
app.use('/MIngredientsAll', MIngredientsAll);
app.use('/MGrainroots', MGrainroots);
app.use('/MMeatandeggs', MMeatandeggs);
app.use('/MVegetable', MVegetable);
app.use('/MFruit', MFruit);

app.use('/bOne', bOne);

app.use('/forumOne', forumOne);

app.use('/ERecipeAll', ERecipeAll);
app.use('/EmenuOne', EmenuOne);
app.use('/EmenuD', EmenuD);
app.use('/AddRecipe', AddRecipe);
app.use('/AddMenu', AddMenu);
app.use('/AddSuccess', AddSuccess);
app.use('/AddFail', AddFail);
app.use('/AddRecipe2', AddRecipe2);
app.use('/AddMenu2', AddMenu2);
app.use('/AddSuccess2', AddSuccess2);
app.use('/AddSuccess3', AddSuccess3);
app.use('/AddRecipe3', AddRecipe3);
app.use('/AddMenu3', AddMenu3);

app.use('/EIngredientsAll', EIngredientsAll);
app.use('/EinOne', EinOne);
app.use('/EingredientsD', EingredientsD);
app.use('/AddIngredients', AddIngredients);
app.use('/AddFood', AddFood);
app.use('/ingredientsUpdateform', ingredientsUpdateform);
app.use('/ingredientsUpdate', ingredientsUpdate);
app.use('/ingredientsupdateSuccess', ingredientsupdateSuccess);
app.use('/ingredientsupdateFail', ingredientsupdateFail);

app.use('/Mblog', Mblog);
app.use('/MbOne', MbOne);
app.use('/MforumOne', MforumOne);
app.use('/Eblog', Eblog);
app.use('/EbOne', EbOne);
app.use('/EblogD', EblogD);
app.use('/EforumOne', EforumOne);
app.use('/Addforumform', Addforumform);
app.use('/Addforum', Addforum);
app.use('/MaddFail', MaddFail);
app.use('/MaddSuccess', MaddSuccess);
app.use('/Myforum', Myforum);
app.use('/MforumD', MforumD);
app.use('/MremoveSuccess', MremoveSuccess);
app.use('/MremoveFail', MremoveFail);
app.use('/AddComment', AddComment);
app.use('/EcommentD', EcommentD);
app.use('/McommentD', McommentD);
app.use('/EAddforumform', EAddforumform);
app.use('/EAddforum', EAddforum);
app.use('/Eblog2', Eblog2);
app.use('/Mblog2', Mblog2);
app.use('/blog2', blog2);
app.use('/Eblog2One', Eblog2One);
app.use('/Eblog2OneD', Eblog2OneD);
app.use('/Mblog2One', Mblog2One);
app.use('/blog2One', blog2One);
app.use('/addCart', addCart);
app.use('/Cart', Cart);
app.use('/cartD', cartD);
app.use('/order', order);
app.use('/forumUpdate', forumUpdate);
app.use('/forumUpdateform', forumUpdateform);



app.use(express.static('public/img'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
