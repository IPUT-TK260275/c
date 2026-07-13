#include <stdio.h>
#include <string.h>

int main(void) {
    char address[1024];

    fgets(address, sizeof(address), stdin);
    address[strcspn(address, "\r\n")] = '\0';

    const char *at = strchr(address, '@');
    const int has_one_at = at != NULL && at != address && strchr(at + 1, '@') == NULL;
    const int has_dot_after_at = has_one_at && strchr(at + 1, '.') != NULL;

    printf("---\n%s\n", has_dot_after_at ? "true" : "false");
    return 0;
}
