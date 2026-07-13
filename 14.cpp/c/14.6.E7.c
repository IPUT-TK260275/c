#include <stdio.h>
#include <string.h>

int main(void) {
    char postal_code[256];

    fgets(postal_code, sizeof(postal_code), stdin);
    postal_code[strcspn(postal_code, "\r\n")] = '\0';
    printf("---\n%.3s-%s\n", postal_code, postal_code + 3);
    return 0;
}
