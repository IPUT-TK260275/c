#include <stdio.h>

int main(void) {
    int limit;

    scanf("%d", &limit);
    printf("---\n");
    for (int row = 1; row <= limit; ++row) {
        for (int column = 1; column <= row; ++column) {
            if (column > 1) {
                putchar(',');
            }
            printf("%d", row);
        }
        putchar('\n');
    }
    return 0;
}
