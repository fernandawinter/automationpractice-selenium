const helper = require('../helper')

const SELECTORS = require('../selectors/automation-practice')
const USER_DATA = require('../data/user-data')

describe("Automation Practice", function () {
    browser.ignoreSynchronization = true; // This allows to protractor to run on regular website, not specific to angular 

    it("Sucessful purchase of a product", function () {
        //1. Acessar o site: www.automationpractice.com. 
        const URL = 'http://automationpractice.com/index.php?'

        browser.get(URL);

        //2. Escolha um produto qualquer na loja.
        helper.waitForElement(SELECTORS.HOME_PAGE_PRODUCT_LINK);
        element(by.css(SELECTORS.HOME_PAGE_PRODUCT_LINK)).click();

        //3. Adicione o produto escolhido ao carrinho.
        helper.waitForElement(SELECTORS.ADD_TO_CART_BUTTON);
        element(by.css(SELECTORS.ADD_TO_CART_BUTTON)).click();

        //4. Prossiga para o checkout.
        helper.waitForElement(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON);
        element(by.css(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON)).click();

        //5. Valide se o produto foi corretamente adicionado ao carrinho e prossiga caso esteja tudo certo.
        helper.waitForElement(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON);
        element(by.css(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON)).click();

        //6. Realize o cadastro do cliente preenchendo todos os campos obrigatórios dos formulários.
        helper.waitForElement(SELECTORS.RANDOM_EMAIL_FILL);
        element(by.css(SELECTORS.RANDOM_EMAIL_FILL)).sendKeys(USER_DATA.EMAIL_ADDRESS);

        helper.waitForElement(SELECTORS.CREATE_AN_ACCOUNT_BUTTON);
        element(by.css(SELECTORS.CREATE_AN_ACCOUNT_BUTTON)).click();

        helper.waitForElement(SELECTORS.MRS_BUTTON);
        element(by.css(SELECTORS.MRS_BUTTON)).click();

        element(by.css(SELECTORS.FIRST_NAME_FILL)).sendKeys(USER_DATA.FIRST_NAME);

        element(by.css(SELECTORS.LAST_NAME_FILL)).sendKeys(USER_DATA.LAST_NAME);

        element(by.css(SELECTORS.EMAIL_FILL)).click();

        element(by.css(SELECTORS.PASSWORD_FILL)).sendKeys(USER_DATA.PASSWORD);

        element(by.css(SELECTORS.ADDRESS_FILL)).sendKeys(USER_DATA.ADDRESS);

        element(by.css(SELECTORS.CITY_FILL)).sendKeys(USER_DATA.CITY);

        element(by.css(SELECTORS.STATE_FILL)).sendKeys(USER_DATA.STATE);

        element(by.css(SELECTORS.POSTAL_CODE_FILL)).sendKeys(USER_DATA.POSTAL_CODE);

        element(by.css(SELECTORS.COUTRY_FILL)).sendKeys(USER_DATA.COUNTRY);

        element(by.css(SELECTORS.MOBILE_PHONE_FILL)).sendKeys(USER_DATA.MOBILE_PHONE);

        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).clear();
        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).sendKeys(USER_DATA.ADDRESS_ALIAS);

        element(by.css(SELECTORS.REGISTER_BUTTON)).click();

        //7. Valide se o endereço está correto e prossiga.
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        element(by.css(SELECTORS.ADDRESS_VALIDATION_AND_PROCEED_TO_CHECKOUT_BUTTON)).click();
        (SELECTORS.TERMS_OF_SERVICE_CHECK), 10000;

        //8. Aceite os termos de serviço e prossiga.
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        element(by.css(SELECTORS.TERMS_OF_SERVICE_CHECK)).click();
        (SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON);

        element(by.css(SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON)).click();

        //9. Valide o valor total da compra.
        //Verifica se o preço do produto está igual ao que estava na página no momento de selecionar para o carrinho de compra.

        //10. Selecione um método de pagamento e prossiga.
        helper.waitForElement(SELECTORS.PAY_BY_BANK_WIRE_BUTTON);
        element(by.css(SELECTORS.PAY_BY_BANK_WIRE_BUTTON)).click();

        //11. Confirme a compra e valide se foi finalizada com sucesso.
        helper.waitForElement(SELECTORS.CONFIRM_MY_ORDER_BUTTON);
        element(by.css(SELECTORS.CONFIRM_MY_ORDER_BUTTON)).click();

        expect(element(by.css(SELECTORS.SUCESSFUL_ORDER)).getText()).toEqual('Your order on My Store is complete.');
    });
});
