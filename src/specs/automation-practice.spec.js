const helper = require('../helper')

const SELECTORS = require('../selectors/automation-practice')
const USER_DATA = require('../data/user-data')

describe("Automation Practice", function () {
    browser.ignoreSynchronization = true; // This allows to protractor to run on regular website, not specific to angular 
   
    it("Sucessful purchase of a product", function () {
        //1.          Acessar o site: www.automationpractice.com. 

        //Visitar a URL www.automationpractice.com ('')

        const URL = 'http://automationpractice.com/index.php?'

        browser.get(URL);
        
        //2.          Escolha um produto qualquer na loja.
        
        //Clicar no nome do primeiro produto da home page 
        helper.waitForElement(SELECTORS.HOME_PAGE_PRODUCT_LINK);
        element(by.css(SELECTORS.HOME_PAGE_PRODUCT_LINK)).click();
        
        helper.waitForElement(SELECTORS.ADD_TO_CART_BUTTON);

        //3.          Adicione o produto escolhido ao carrinho.
        //Clicar no botão "Add to cart"
        element(by.css(SELECTORS.ADD_TO_CART_BUTTON)).click();
        helper.waitForElement(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON);

        //4.          Prossiga para o checkout.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON)).click();
        helper.waitForElement(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON);

        //5.          Valide se o produto foi corretamente adicionado ao carrinho e prossiga caso esteja tudo certo.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON)).click();
        helper.waitForElement(SELECTORS.RANDOM_EMAIL_FILL);

        //6.          Realize o cadastro do cliente preenchendo todos os campos obrigatórios dos formulários.
        //Preencher o campo "Email address" com o conteúdo "e-mail randômico" do lado esquerdo da tela
        element(by.css(SELECTORS.RANDOM_EMAIL_FILL)).sendKeys(USER_DATA.EMAIL_ADDRESS);
        helper.waitForElement(SELECTORS.CREATE_AN_ACCOUNT_BUTTON);

        //Clicar no botão "Create an account"
        element(by.css(SELECTORS.CREATE_AN_ACCOUNT_BUTTON)).click();
        helper.waitForElement(SELECTORS.MRS_BUTTON);

        //Clicar no botão "Mrs."
        element(by.css(SELECTORS.MRS_BUTTON)).click();

        //Preencher o campo "First name" com o conteúdo "Fernanda"
        element(by.css(SELECTORS.FIRST_NAME_FILL)).sendKeys(USER_DATA.FIRST_NAME);

        //Preencher o campo "Last name" com o conteúdo "Winter"
        element(by.css(SELECTORS.LAST_NAME_FILL)).sendKeys(USER_DATA.LAST_NAME);

        //Clicar no campo "Email"
        element(by.css(SELECTORS.EMAIL_FILL)).click();

        //Preencher o campo "Password" com o conteúdo "12345"
        element(by.css(SELECTORS.PASSWORD_FILL)).sendKeys(USER_DATA.PASSWORD);

        //Preencher o campo "Address" com o conteúdo "305 May St"
        element(by.css(SELECTORS.ADDRESS_FILL)).sendKeys(USER_DATA.ADDRESS);

        //Preencher o campo "City" com o conteúdo "Marshalltown"
        element(by.css(SELECTORS.CITY_FILL)).sendKeys(USER_DATA.CITY);

        //Preencher o campo "State" com o conteúdo "Iowa"
        element(by.css(SELECTORS.STATE_FILL)).sendKeys(USER_DATA.STATE);

        //Preencher o campo "Zip/Postal Code" com o conteúdo "50158"
        element(by.css(SELECTORS.POSTAL_CODE_FILL)).sendKeys(USER_DATA.POSTAL_CODE);

        //Preencher o campo "Country" com o conteúdo "Unites States"
        element(by.css(SELECTORS.COUTRY_FILL)).sendKeys(USER_DATA.COUNTRY);

        //Preencher o campo "Mobile phone" com o conteúdo "+1 651-772-3816"
        element(by.css(SELECTORS.MOBILE_PHONE_FILL)).sendKeys(USER_DATA.MOBILE_PHONE);

        //Preencher o campo "Assign an address alias for future reference." com o conteúdo "My office"
        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).clear();
        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).sendKeys(USER_DATA.ADDRESS_ALIAS);

        //Clicar no botão "Register"
        element(by.css(SELECTORS.REGISTER_BUTTON)).click();

        //7.          Valide se o endereço está correto e prossiga.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.ADDRESS_VALIDATION_AND_PROCEED_TO_CHECKOUT_BUTTON)).click();
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        (SELECTORS.TERMS_OF_SERVICE_CHECK), 10000;

        //8.          Aceite os termos de serviço e prossiga.
        //Clicar na caixa de seleção do "Terms of service"
        element(by.css(SELECTORS.TERMS_OF_SERVICE_CHECK)).click();
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        (SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON);

        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON)).click();
        helper.waitForElement(SELECTORS.PAY_BY_BANK_WIRE_BUTTON);

        //9.          Valide o valor total da compra.
        //Verifica se o preço do produto está igual ao que estava na página no momento de selecionar para o carrinho de compra

        //10.      Selecione um método de pagamento e prossiga.
        //Clicar no botão "Pay by bank wire"
        element(by.css(SELECTORS.PAY_BY_BANK_WIRE_BUTTON)).click();

        //11.      Confirme a compra e valide se foi finalizada com sucesso.
        //Clicar no botão "I confirm my order"
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        element(by.css(SELECTORS.CONFIRM_MY_ORDER_BUTTON)).click();

        expect(element(by.css(SELECTORS.SUCESSFUL_ORDER)).getText()).toEqual('Your order on My Store is complete.');
    });
});
