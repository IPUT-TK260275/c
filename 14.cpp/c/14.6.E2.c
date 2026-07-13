#include <stdio.h>

int main(void) {
    double total = 0;

    for (int i = 0; i < 5; ++i) {
        double value;
        scanf("%lf", &value);
        total += value;
    }

    printf("---\n%g\n", total / 5);
    return 0;
}
