#include <stdio.h>
#include <string.h>

int main(void) {
    char text[1024];

    fgets(text, sizeof(text), stdin);
    text[strcspn(text, "\r\n")] = '\0';
    printf("---\n%c\n", text[strlen(text) / 2]);
    return 0;
}
