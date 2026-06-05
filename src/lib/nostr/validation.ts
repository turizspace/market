/**
 * Small helpers for validating nostr pubkeys/identifiers
 */
export function isHexPubkey(value: unknown): boolean {
	if (typeof value !== 'string') return false
	return /^[0-9a-f]{64}$/i.test(value)
}

export function isNpub(value: unknown): boolean {
	if (typeof value !== 'string') return false
	return value.startsWith('npub')
}
