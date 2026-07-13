#include <stdio.h>

int main(void) {
    int a;
    int b;
    int c;

    scanf("%d%d%d", &a, &b, &c);
    printf("---\n%s\n", (a != b && b != c && a != c) ? "true" : "false");
    return 0;
}
