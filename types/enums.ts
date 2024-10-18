export enum KeyboardTypes {
    DEFAULT = 'default',              // Default keyboard for general text input
    NUMBER_PAD = 'number-pad',         // Numeric keyboard without decimals
    DECIMAL_PAD = 'decimal-pad',       // Keyboard for entering numbers with decimals
    NUMERIC = 'numeric',               // Numeric keyboard for numbers only
    EMAIL_ADDRESS = 'email-address',   // Keyboard optimized for email input
    PHONE_PAD = 'phone-pad',           // Keyboard optimized for entering phone numbers
    URL = 'url',                       // Keyboard optimized for entering URLs
    VISIBLE_PASSWORD = 'visible-password', // Keyboard optimized for entering visible password
    ASCII_CAPABLE = 'ascii-capable',   // ASCII capable keyboard
    NAME_PHONE_PAD = 'name-phone-pad', // Keyboard for name and phone number
    TWITTER = 'twitter',               // Twitter-specific keyboard
    WEB_SEARCH = 'web-search',         // Keyboard optimized for web searches
    DEFAULT_PASSWORD = 'default',      // Password field using the default keyboard (fallback)
}
