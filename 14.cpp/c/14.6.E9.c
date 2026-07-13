#include <stdio.h>

int main(void) {
    int limit;

    scanf("%d", &limit);
    printf("---\n");
    for (int value = 1; value <= limit; value += 2) {
        printf("%d\n", value);
    }
    return 0;
}
