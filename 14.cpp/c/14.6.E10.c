#include <stdio.h>

int main(void) {
    int limit;

    scanf("%d", &limit);
    printf("---\n");

    long long factorial = 1;
    for (int value = 1; value <= limit; ++value) {
        factorial *= value;
        printf("%lld\n", factorial);
    }
    return 0;
}
